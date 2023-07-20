import { Component, Inject, OnInit } from '@angular/core';
import { DialogRef } from 'src/app/core/dialog/dialog-ref';
import { DIALOG_DATA } from 'src/app/core/dialog/dialog-tokens';

@Component({
  selector: 'pmo-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.less']
})
export class PaymentComponent implements OnInit {

  constructor( private dialogRef: DialogRef,@Inject(DIALOG_DATA) public data: string) { }
// data is where we want to access data from parent component
  ngOnInit(): void {
  }
deactivate(){
 console.log("this is deactivated")
 // in close we send results to the parent component.
 //or we can call api over here also.
 this.dialogRef.close("data send");
}
  cancel(){
   console.log("it is canceled");
   this.dialogRef.close();
  }

}
