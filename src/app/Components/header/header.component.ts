import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title= "this is my test header";
  constructor() {

   }

  ngOnInit(): void {
  }

  //function

  getName(name: any){
    alert(name);
  }

}
