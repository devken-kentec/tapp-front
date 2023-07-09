import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListasRoutingModule } from './listas-routing.module';
import { ListasListComponent } from './listas-list/listas-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListasListComponent
  ],
  imports: [
    CommonModule,
    ListasRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class ListasModule { }
