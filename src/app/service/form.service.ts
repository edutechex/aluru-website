import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

 baseUrl = "https://api.onnes.in/api";

  constructor(private http: HttpClient) { }

  addMessageForm(form:any){
   return this.http.post(`${this.baseUrl}/Form`,form);
  }

  //get nav item
  getNavItem(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/NavItem`);
  }

  //get home image
  getHomeImage() : Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/CarouselImage`);
  }

  //get about us
  getAboutUs(): Observable<any>{
    return this.http.get(`${this.baseUrl}/AboutUs`);
  }

  //get team
  getTeam(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Team`);
  }

  //get blog & news
  getBlogNews(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Blog`);
  }

   // Get Offering
   getOffering(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Offering`);
  }

   //get joinus
   getJoinUs() :Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/JoinUs`);
  }

  //get cfrp content
  getCfrpData(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/Offoring_CFRP`);
  }
}
