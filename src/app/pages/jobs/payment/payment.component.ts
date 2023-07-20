import { Component, OnInit } from '@angular/core';
import { DialogRef } from 'src/app/core/dialog/dialog-ref';

@Component({
  selector: 'pmo-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.less']
})
export class PaymentComponent implements OnInit {

  constructor( private dialogRef: DialogRef,) { }

  ngOnInit(): void {
  }
deactivate(){
 console.log("this is deactivated")
 this.dialogRef.close();
}
  cancel(){
   console.log("it is canceled");
   this.dialogRef.close();
  }

}
