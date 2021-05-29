import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';

interface  Iproducts{
  item:string
  qty:string
}

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private service:SharedService) { }



  ngOnInit(): void {

  }

  addProducts(payload:Iproducts){

    this.service.postProducts(payload).subscribe(res=>console.log('suceess',res));
  }

}
