import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {RestDatasourceService} from '../../models/services/rest-datasource.service';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
})
export class PostCreateComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  public createPostForm;
  constructor(private formBuilder: FormBuilder, private restDataSource: RestDatasourceService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.createPostForm = this.formBuilder.group({
      userId: ['1', Validators.required],
      title: ['ihor.metko', Validators.required],
      body: ['ihor.metko', Validators.required],
    });
  }

  public required(name: string): boolean {
    return this.createPostForm.get(name).hasError('required') && this.createPostForm.get(name).touched;
  }

  public onSubmit() {
    this.restDataSource.addPost(this.createPostForm.value)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(data => {
        this.router.navigate(['posts']);
        alert('Your post ' + data.title + ' was successfully created!');
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
