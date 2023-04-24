import { Component,Input } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart-box',
  templateUrl: './cart-box.component.html',
  styleUrls: ['./cart-box.component.css']
})
export class CartBoxComponent {
  @Input() product:any;
  productlist:any;
  types:string[]=[
    "All",
    "Electronics",
    "Cosmetics",
    "Groceries",
    "Books"
  ]
  selected:string="All"
  
  constructor(private hs:CartService){
    this.hs.getproducts().subscribe(
      {
        next: (data:any) => this.productlist = data,
        error: () => this.productlist = []
      }
    )
  }
  min:number=0;
  max:number=2000;
  
}
