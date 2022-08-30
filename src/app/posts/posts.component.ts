import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Ipost {
  body: '';
  title: string;
  id: number;
  userId: number;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  private url: 'https://jsonplaceholder.typicode.com/posts';
  posts!: Ipost[];

  constructor(http: HttpClient){
    http.get<Ipost[]>(this.url)
      .subscribe(response => {
        this.posts = response;
        console.log(response);
      });
  };


  ngOnInit() {
  }

}