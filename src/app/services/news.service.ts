import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getAll(limit = 10) {

    this.http.get(`/api/v1/news?limit=${limit}`);

  }

  getBySlug(slug = false) {

    if (!slug) {
      return false;
    }

  }
}
