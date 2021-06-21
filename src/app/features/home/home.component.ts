import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../utility/service/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  params:any = {limit:100};
  launch_year:any = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
  successful_landing:any=[{value:true,name:"True"},{value:false,name:"False"}];
  successful_launch:any=[{value:true,name:"True"},{value:false,name:"False"}];
  programs_list:any;
  constructor(public apiService:ApiService) { }

  ngOnInit() {
    this.getProgramList();
  }
  filter(filter_type:string,filter_value:any){
    this.params[filter_type]=filter_value;
    this.getProgramList();
  }
  getProgramList(){
    this.apiService.getData('/v3/launches',this.params).subscribe((data:any)=>{
      this.programs_list = data;
    });
  }
}
