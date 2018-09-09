import { Component, OnInit } from '@angular/core';
import { NewsService } from 'app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private _news: NewsService) { }

  ngOnInit() {
    this._news.getAll().subscribe(news => {
      console.log(news);
    });
  }

}
