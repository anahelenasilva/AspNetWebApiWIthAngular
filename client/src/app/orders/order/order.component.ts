import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: []
})
export class OrderComponent implements OnInit {

  constructor(public service: OrderService) { }

  ngOnInit() {
  }

  resetForm(form?: NgForm){
    if(form != null){
      form.reset();
    }

    this.service.formData = {
      OrderId: null,
      CustomerId: 0,
      OrderNo: Math.floor(1000000 + Math.random() * 900000).toString(),
      PaymentMethod: '',
      GrandTotal: 0
    };
  }
}
