import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AppState } from 'src/app/app.reducers';
import * as CategoriesAction from '../../actions';
import { CategoryDTO } from '../../models/category.dto';
import { ConfirmDialogComponent } from 'src/app/Shared/Components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit {
  dataSource: MatTableDataSource<CategoryDTO>;
  displayedColumns: string[] = ['id', 'title', 'description', 'css_color', 'actions'];
  loading = false;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  private userId: string;
  
  constructor(
    private router: Router, 
    private store: Store<AppState>,
    private dialog: MatDialog
  ) {
    this.userId = '';
    this.dataSource = new MatTableDataSource<CategoryDTO>([]);
    
    this.store.select('auth').subscribe((auth) => {
      if (auth.credentials.user_id) {
        this.userId = auth.credentials.user_id;
      }
    });
    
    this.store.select('categories').subscribe((categories) => {
      this.dataSource.data = categories.categories;
      this.loading = categories.loading;
    });
  }
  
  ngOnInit(): void {
    this.loadCategories();
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  private loadCategories(): void {
    if (this.userId) {
      this.store.dispatch(
        CategoriesAction.getCategoriesByUserId({ userId: this.userId })
      );
    }
  }
  
  createCategory(): void {
    this.router.navigateByUrl('/user/category/');
  }
  
  updateCategory(categoryId: string): void {
    this.router.navigateByUrl('/user/category/' + categoryId);
  }
  
  deleteCategory(categoryId: string): void {
    // show confirmation dialog
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: { title: 'Confirm Delete', message: `Are you sure you want to delete category with ID: ${categoryId}?` }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(
          CategoriesAction.deleteCategory({ categoryId: categoryId })
        );
      }
    });
  }
}
