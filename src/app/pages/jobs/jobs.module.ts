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
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import {CdkDrag, CdkDropList, CdkDropListGroup} from '@angular/cdk/drag-drop';
import { ComboBoxComponent } from './combo-box/combo-box.component';

const routes: Routes = [
  { path: '', component: JobsComponent },
  { path: 'new', component: NewJobsComponent },
  { path: 'nav', component: NavComponent },
  { path: 'drag', component: DragDropComponent },
  { path: 'combo', component: ComboBoxComponent },
  { path: ':id', component: UpdateJobsComponent },

];

@NgModule({
  declarations: [
    JobsComponent,
    NewJobsComponent,
    UpdateJobsComponent,
    PaymentComponent,
    NavComponent,
    DragDropComponent,
    ComboBoxComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    CdkMenuTrigger,
    CdkDrag,
    CdkDropListGroup, CdkDropList,
    CdkMenu,
    CdkMenuItem,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class JobsModule {}
