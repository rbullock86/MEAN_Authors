import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})
export class NewauthorComponent implements OnInit {
  newAuthor = {name : ""};
  _status;

  constructor(
    private _httpService : HttpService,
    private _route : ActivatedRoute,
    private _router : Router
  ) {
    this.newAuthor.name = "";
    this._status = "";
   }

  ngOnInit() {
  }

  createAuthor(){
    if( this.newAuthor.name.length < 3){
      this._status = "Name must be at least three characters long."
    }
    else{
      let obs = this._httpService.createAuthor(this.newAuthor);
      obs.subscribe(data => {
        console.log("Data", data);
        if (data['errors']){
          this._status = "Name must be at least three characters long.";
        }
        else {
          this._status = "";
          this.newAuthor.name = "";
        }
      })
    }
  }

  homeButtonClick(){
    this._router.navigate(['/home']);
  }

}
