
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs';


import { School } from './school.model';





@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  selectedSchool:School;
  schools:School[];
  readonly baseURL='http://localhost:3000/schools/';

  constructor(private http:HttpClient) { }

  postSchool(s:School){
     return this.http.post(this.baseURL,s);

  }
  getSchoolList(){
    return this.http.get(this.baseURL); 
  }
  putSchool(s:School){
    return this.http.put(this.baseURL+`/${s._id}`,s);
  }
  deleteSchool(_id:string){
    return this.http.delete(this.baseURL+`/${_id}`);
  }
}
