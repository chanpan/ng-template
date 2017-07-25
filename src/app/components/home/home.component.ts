import { Component, OnInit } from '@angular/core';
const $ = require("../../../assets/js/jquery-3.2.1.min");
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = `Ezform`;

  constructor() { }
  Test(){
    alert("OK");
     $("#show").html(this.title);
  }
  ngOnInit() {
  }

}
