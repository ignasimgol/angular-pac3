import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AppState } from 'src/app/app.reducers';
import * as PostsAction from '../../actions';
import { PostDTO } from '../../models/post.dto';
import { ConfirmDialogComponent } from 'src/app/Shared/Components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  dataSource: MatTableDataSource<PostDTO>;
  displayedColumns: string[] = ['id', 'title', 'description', 'likes', 'dislikes', 'actions'];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  private userId: string;
  
  constructor(
    private router: Router, 
    private store: Store<AppState>,
    private dialog: MatDialog
  ) {
    this.userId = '';
    this.dataSource = new MatTableDataSource<PostDTO>([]);
    
    this.store.select('auth').subscribe((auth) => {
      if (auth.credentials.user_id) {
        this.userId = auth.credentials.user_id;
      }
    });
    
    this.store.select('posts').subscribe((posts) => {
      this.dataSource.data = posts.posts;
    });
  }
  
  ngOnInit(): void {
    this.loadPosts();
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  private loadPosts(): void {
    if (this.userId) {
      this.store.dispatch(
        PostsAction.getPostsByUserId({ userId: this.userId })
      );
    }
  }
  
  createPost(): void {
    this.router.navigateByUrl('/user/post/');
  }
  
  updatePost(postId: string): void {
    this.router.navigateByUrl('/user/post/' + postId);
  }
  
  deletePost(postId: string): void {
    // show confirmation dialog
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: { title: 'Confirm Delete', message: `Are you sure you want to delete post with ID: ${postId}?` }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(PostsAction.deletePost({ postId: postId }));
      }
    });
  }
}
