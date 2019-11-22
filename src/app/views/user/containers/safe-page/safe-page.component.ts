import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import { Safe, SafeItem } from '~core/model';
import { SafeService } from '~core/services';
import { AddSafeItemDialogComponent } from '../add-safe-item-dialog/add-safe-item-dialog.component';

@Component({
  selector: 'cool-safe-page',
  templateUrl: './safe-page.component.html',
  styleUrls: ['./safe-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SafePageComponent implements OnInit {
  safe$: Observable<Safe>;
  items$: Observable<SafeItem[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private safeService: SafeService,
    private dialogService: MatDialog
  ) {}

  ngOnInit() {
    this.safe$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.safeService.getSafe(params.get('id'))
      )
    );
    this.items$ = this.safe$.pipe(
      switchMap((safe: Safe) => this.safeService.getItems(safe.id))
    );
  }

  addSafeItem() {
    const dialogRef = this.dialogService.open(AddSafeItemDialogComponent);
    dialogRef
      .afterClosed()
      .pipe(withLatestFrom(this.safe$))
      .subscribe(([result, safe]: [SafeItem, Safe]) => {
        console.log('result', result);
        if (result) {
          this.safeService.addItem(safe.id, result);
        }
      });
  }
}
