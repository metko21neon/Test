import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource} from '@angular/material';
import {RestDatasourceService} from '../../models/services/rest-datasource.service';
import {IComment} from '../post/post.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-comments-dialog',
  templateUrl: './comments-dialog.component.html',
})
export class CommentsDialogComponent implements OnInit {
  public comments$: Observable<IComment[]>;
  constructor(public dialogRef: MatDialogRef<CommentsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data,
              public restDataSource: RestDatasourceService) {}

  ngOnInit(): void {
    this.getComments();
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  private getComments(): void {
    this.comments$ = this.restDataSource.getComments(this.data);
  }

}
