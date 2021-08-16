import { Component, OnInit, ViewChild } from '@angular/core';
import { GetPostsService } from '../get-posts.service';
import { IPost } from '../post';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  public posts = <IPost []>[];
  displayedColumns: string[] = [ 'Id','userId','title', 'body'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _getPostsService: GetPostsService) { }
  
  dataSources = new MatTableDataSource<IPost>();
   ngOnInit(): void {
    this._getPostsService.getPosts().subscribe(data => {
      this.dataSources.data = data;
      this.dataSources.paginator = this.paginator;
      return this.posts;
    });
    }
}