// module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// component
import { HomeComponent } from '../home/home.component';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",  children:[
          {
            path: "",
            component: HomeComponent
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class HomeModule { }
