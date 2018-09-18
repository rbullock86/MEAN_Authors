import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors(){
    return this._http.get("/api/authors");
  }

  getAuthor(id){
    return this._http.get("/api/authors/"+id);
  }

  createAuthor(body){
    return this._http.post("/api/authors", body);
  }

  editAuthor(id, body){
    return this._http.put("/api/authors/"+id, body);
  }

  deleteAuthor(id){
    return this._http.delete("api/authors/"+id);
  }
}
