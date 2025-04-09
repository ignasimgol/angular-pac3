import { Component, OnInit } from '@angular/core';
import { PostDTO } from '../../models/post.dto';
import { PostService } from '../../services/post.service';
import { SharedService } from '../../../Shared/Services/shared.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import * as PostsAction from '../../actions';
import { HttpErrorResponse } from '@angular/common/http';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { RouterModule } from '@angular/router'; // Add this import

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // If using standalone components, add this:
  // imports: [RouterModule, /* other imports */],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('0.3s ease-in', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  posts: PostDTO[];
  showButtons: boolean;

  private userId: string;

  constructor(
    private postService: PostService,
    private sharedService: SharedService,
    private store: Store<AppState>
  ) {
    this.userId = '';
    this.posts = new Array<PostDTO>();
    this.showButtons = false;

    this.store.select('auth').subscribe((auth) => {
      this.showButtons = false;

      if (auth.credentials.user_id) {
        this.userId = auth.credentials.user_id;
      }
      if (auth.credentials.access_token) {
        this.showButtons = true;
      }
    });

    this.store.select('posts').subscribe((posts) => {
      this.posts = posts.posts;
    });
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  private loadPosts(): void {
    this.store.dispatch(PostsAction.getPosts());
  }

  // Update your like and dislike methods to handle the correct type
  like(postId: number | string): void {
    // Your implementation
  }

  dislike(postId: number | string): void {
    // Your implementation
  }
}
