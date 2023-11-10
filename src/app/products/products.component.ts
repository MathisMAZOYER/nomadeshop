import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	products: Product[] | undefined;

	showDetails: Boolean = false;

	//more details fields
	moreDetailsID: Number | undefined;
	moreDetailsIntName : String | undefined;


	constructor(private productsService : ProductService ) {}
	
	ngOnInit(): void {   
    this.showProduct();
	}

	showProduct() {
		this.productsService.getProducts().subscribe((data) => {
			this.products = data;
	});
	}

	updateShowDetails(index: number) {
		if (!this.showDetails) {
			this.showDetails = ! this.showDetails;	
		}
	
		if (this.products && this.products.length > index) {
			this.moreDetailsID = this.products[index].id;
			const parts = this.products[index].path.split('/');
			this.moreDetailsIntName = parts[parts.length - 1];
		  }
	}

	closeDetails() {
		this.showDetails = ! this.showDetails;
	}
}
