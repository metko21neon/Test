import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {RestDatasourceService} from '../../models/services/rest-datasource.service';
import {IUser} from '../../models/interfaces/post.interfaces';

@Component({
  selector: 'app-author-dialog',
  templateUrl: './author-dialog.component.html',
})
export class AuthorDialogComponent implements OnInit {
  public user$: Observable<IUser>;
  constructor(public dialogRef: MatDialogRef<AuthorDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: number,
              public restDataSource: RestDatasourceService) {}

  ngOnInit(): void {
    this.getComments();
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  private getComments(): void {
    this.user$ = this.restDataSource.getUser(this.data);
  }

}
