import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Safe, SafeItem } from '~core/model';
import { SafeService } from '~core/services';

@Component({
  templateUrl: './safe-page.component.html',
  styleUrls: ['./safe-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SafePageComponent implements OnInit {
  safe$: Observable<Safe>;
  items$: Observable<SafeItem[]>;

  constructor(private activatedRoute: ActivatedRoute, private service: SafeService) {}

  ngOnInit() {
    this.safe$ = this.activatedRoute.paramMap.pipe(switchMap((params: ParamMap) => this.service.getSafe(params.get('id'))));
    this.items$ = this.safe$.pipe(switchMap((safe: Safe) => this.service.getItems(safe.id)));
  }
}
