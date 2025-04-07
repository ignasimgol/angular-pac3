import { Component, OnInit } from '@angular/core';
import { PostDTO } from '../../models/post.dto';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import * as PostsAction from '../../actions';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  posts: PostDTO[];
  numLikes: number;
  numDislikes: number;

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  public barChartLabels: Label[] = ['Total Interactions'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    { data: [0], label: 'Likes', backgroundColor: '#4CAF50' },
    { data: [0], label: 'Dislikes', backgroundColor: '#f44336' }
  ];

  constructor(private store: Store<AppState>) {
    this.posts = new Array<PostDTO>();
    this.numLikes = 0;
    this.numDislikes = 0;

    this.store.select('posts').subscribe((posts) => {
      this.posts = posts.posts;
      this.calculateTotals();
      this.updateChart();
    });
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  private loadPosts(): void {
    this.store.dispatch(PostsAction.getPosts());
  }

  private calculateTotals(): void {
    this.numLikes = 0;
    this.numDislikes = 0;
    this.posts.forEach((post) => {
      this.numLikes += post.num_likes;
      this.numDislikes += post.num_dislikes;
    });
  }

  private updateChart(): void {
    this.barChartData[0].data = [this.numLikes];
    this.barChartData[1].data = [this.numDislikes];
  }
}
