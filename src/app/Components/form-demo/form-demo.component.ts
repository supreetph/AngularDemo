import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {

  constructor(private service:SharedService) { }

  ProductList:any=[];

  ngOnInit(): void {
this.showProducts();
  }

  getFormValues(val: any){
    console.log(val);

  }

  showProducts(){
    this.service.getProducts().subscribe(
      a=>{
        this.ProductList=a;
      }
    )
  }

}
