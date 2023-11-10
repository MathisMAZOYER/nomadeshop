import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] | undefined;

  showDetails: Boolean = false;
  moreDetailsID: Number = 0;
  moreDetailsSize: String = '';

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.showOrders();
  }

  showOrders() {
    this.orderService.getOrder().subscribe((data) => {
      this.orders = data;
    });
  }

  updateShowDetails(index: number) {
		if (!this.showDetails) {
			this.showDetails = ! this.showDetails;	
		}
	
		if (this.orders && this.orders.length > index) {
			this.moreDetailsID = this.orders[index].id;
      this.moreDetailsSize = this.orders[index].size;
		  }
	}

  closeDetails() {
		this.showDetails = ! this.showDetails;
	}
}
