import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  obj: any;
  

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams
    .subscribe(params => {
      console.log(params); 
      this.obj = params;
    }
  );
  }

}
