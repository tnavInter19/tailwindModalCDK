import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { RouterModule, Routes } from '@angular/router';
import { NewJobsComponent } from './new-jobs/new-jobs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateJobsComponent } from './update-jobs/update-jobs.component';
import { PaymentComponent } from './payment/payment.component';
import { DialogModule } from '@angular/cdk/dialog';
import { NavComponent } from './nav/nav.component';
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from '@angular/cdk/menu'; 

const routes: Routes = [
 { path: '', component: JobsComponent },
 { path: 'new', component: NewJobsComponent },
 { path: 'nav', component:NavComponent },
 { path: ':id', component:UpdateJobsComponent },
]

@NgModule({
  declarations: [
    JobsComponent,
    NewJobsComponent,
    UpdateJobsComponent,
    PaymentComponent,
    NavComponent
  ],
  imports: [
   CommonModule,
   FormsModule,
   DialogModule,
   CdkMenuTrigger, CdkMenu, CdkMenuItem,
   ReactiveFormsModule,
   RouterModule.forChild(routes)
 ]
})
export class JobsModule { }
