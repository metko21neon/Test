import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {RestDatasourceService} from '../../models/services/rest-datasource.service';
import {CommentsDialogComponent} from '../comments-dialog/comments-dialog.component';
import {AuthorDialogComponent} from '../author-dialog/author-dialog.component';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {IPost} from '../../models/interfaces/post.interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public dataSource: MatTableDataSource<IPost>;
  public displayedColumns: string[] = ['id', 'title', 'comments', 'author'];
  constructor(private restDataSource: RestDatasourceService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getPosts();
  }

  private getPosts(): void {
    this.restDataSource.getPosts()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(posts => {
        this.dataSource = new MatTableDataSource(posts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  public applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public openDialog(id: number): void {
    const dialogRef = this.dialog.open(CommentsDialogComponent, {
      width: '700px',
      height: '80%',
      data: id
    });

    dialogRef.afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {});
  }

  public openAuthorDialog(id: number): void {
    const dialogRef = this.dialog.open(AuthorDialogComponent, {
      width: '700px',
      height: '60%',
      data: id
    });

    dialogRef.afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {});
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
