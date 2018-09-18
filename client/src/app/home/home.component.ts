import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  _authorList;

  constructor(
    private _httpService : HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors(){
    let obs = this._httpService.getAuthors();
    obs.subscribe(data => {
      console.log("GetAuthors:", data);
      this._authorList = data;
    })
  }

  newAuthorClick(){
    this._router.navigate(["/new"]);
  }

  editAuthorClick(id){
    this._router.navigate(["/edit/"+id]);
  }

  deleteAuthorClick(id){
    let obs = this._httpService.deleteAuthor(id);
    obs.subscribe(data => {
      console.log("DeleteAuthor", data);
      this.getAuthors();
    })
  }

}
