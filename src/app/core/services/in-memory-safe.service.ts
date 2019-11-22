import {
  InMemoryDbService,
  ParsedRequestUrl,
  RequestInfo,
  RequestInfoUtilities
} from 'angular-in-memory-web-api';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

interface DB {
  [collectionName: string]: any[];
}

type ReturnType = 'observable' | 'promise' | 'object';

// @Injectable({
//   providedIn: 'root',
// })
export class SafeInMemDataService implements InMemoryDbService {
  active = true;
  maxId = 1000;

  /** In-memory database data */
  db: DB;

  createDb(reqInfo?: RequestInfo) {
    // default returnType
    // let returnType = 'object';
    const returnType: ReturnType = 'observable' || 'promise';
    // let returnType  = 'promise';

    console.log('Creating Safe Mock Data service');

    if (!this.db) {
      const items = [
        { safeId: '1', id: '1', name: 'Fahrrad', price: 55.5 },
        { safeId: '1', id: '2', name: 'Laptop', price: 999.99 },
        { safeId: '2', id: '3', name: 'Taschenrechner', price: 123.5 },
        { safeId: '2', id: '4', name: 'Sonnenbrille', price: 345 },
        { safeId: '2', id: '5', name: 'Brille', price: 567 }
      ];

      const safes = [
        {
          id: '1',
          value: 999,
          itemSize: 2,
          users: ['111'],
          items: ['1', '2'],
          active: true,
          activeSince: new Date(Date.UTC(1999, 1, 1))
        },
        {
          id: '2',
          value: 123,
          itemSize: 3,
          items: ['3', '4', '5'],
          users: ['17', '19', '25'],
          active: true,
          activeSince: new Date(Date.UTC(2018, 11, 30))
        }
      ];

      if (reqInfo) {
        const body = reqInfo.utils.getJsonBody(reqInfo.req) || {};
        if (body.clear === true) {
          safes.length = 0;
          items.length = 0;
          // for (const coll in this.db) {
          //   this.db[coll].length = 0;
          // }
        }
        this.active = !!body.active;
        // 'returnType` can be 'object' | 'observable' | 'promise'
        // returnType = body.returnType || 'object';
      }
      this.db = { safes, items };
    }

    switch (returnType) {
      case 'observable':
        return of(this.db).pipe(delay(10));
      case 'promise':
        return new Promise(resolve => {
          setTimeout(() => resolve(this.db), 10);
        });
      default:
        return this.db;
    }
  }

  /**
   * Simulate generating new Id on the server
   * All collections in this db have numeric ids.
   * Seed grows by highest id seen in any of the collections.
   */
  genId(collection: { id: number }[], collectionName: string) {
    this.maxId =
      1 +
      collection.reduce((prev, cur) => Math.max(prev, cur.id || 0), this.maxId);
    return this.maxId;
  }

  /**
   * Override `parseRequestUrl`
   * Manipulates the request URL or the parsed result.
   * If in-mem is inactive, clear collectionName so that service passes request thru.
   * If in-mem is active, after parsing with the default parser,
   * @param url from request URL
   * @param utils for manipulating parsed URL
   */
  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    // const newUrl = url.replace('/books/search/', '/books/?title=');
    const parsed: ParsedRequestUrl = utils.parseRequestUrl(url);
    // console.log('request:', parsed, url);

    if (/\/items(\/)?$/.test(url)) {
      const match: RegExpExecArray = /\/safes\/([0-9]*)\/items(\/)?$/.exec(url);
      parsed.collectionName = 'items';
      parsed.id = '';
      parsed.query = new Map().set('safeId', [match[1]]);
      // parsed.resourceUrl = 'api/items';
    }

    const isDefaultRoot = parsed.apiBase === 'api/';
    parsed.collectionName =
      this.active && isDefaultRoot
        ? mapCollectionName(parsed.collectionName)
        : undefined;
    return parsed;
  }
}

/**
 * Remap a known singular collection name ("hero")
 * to the plural collection name ("heroes"); else return the name
 * @param name - collection name from the parsed URL
 */
function mapCollectionName(name: string): string {
  return ({ safe: 'safes', item: 'items' } as any)[name] || name;
}
