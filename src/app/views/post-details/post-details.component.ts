import { Component, OnInit } from '@angular/core';
import {RestDatasourceService} from '../../models/services/rest-datasource.service';
import {Observable} from 'rxjs';
import {IComment, IPost} from '../post/post.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
})
export class PostDetailsComponent implements OnInit {
  public comments$: Observable<IComment[]>;
  public post$: Observable<IPost>;
  private id: number;
  constructor(private restDataSource: RestDatasourceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getData();
  }

  private getData(): void {
    this.comments$ = this.restDataSource.getComments(this.id);
    this.post$ = this.restDataSource.getPost(this.id);
  }

}
