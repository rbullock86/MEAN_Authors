import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-editauthor',
  templateUrl: './editauthor.component.html',
  styleUrls: ['./editauthor.component.css']
})
export class EditauthorComponent implements OnInit {

  _author;
  _status;

  constructor(
    private _httpService : HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this._status = "";
    this._route.params.subscribe((params: Params) => {
      console.log("Author ID #:", params['id']);
      let id = params['id'];
      this.getAuthor(id);
    })
  }

  getAuthor(id){
    let obs = this._httpService.getAuthor(id);
    obs.subscribe(data => {
      console.log("Data", data);
      this._author = data;
    })
  }

  editAuthor(){
    console.log("Author ID:",this._author._id, this._author);
    if (this._author.name.length < 3){
      this._status = "Name must be at least 3 characters long";
    }
    else {

      let obs = this._httpService.editAuthor(this._author._id, this._author)
      obs.subscribe(data => {
        console.log("Data", data);
        if(data['errors']){
          this._status = data['message'];
        }
        else{
          this.homeButtonClick();
        }
      })
    }
  }

  homeButtonClick(){
    this._router.navigate(["/home"]);
  }
}
