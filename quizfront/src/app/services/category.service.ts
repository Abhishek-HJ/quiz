import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //private apiUrl = 'http://example.com/api/categories'; // replace with your API URL

  constructor(private http: HttpClient) { }
  public categories(){
    return this.http.get(`${baseUrl}/category/`);
  }

  //getCategories(): Observable<any> {
   // return this.http.get<any>(this.apiUrl);

   public addCategory(category: any){
    return this.http.post(`${baseUrl}/category/`,category);
    
   }
  }
