import { Component, OnInit } from '@angular/core';
import { FormService } from '../service/form.service';

@Component({
  selector: 'app-investros',
  templateUrl: './investros.component.html',
  styleUrls: ['./investros.component.css']
})
export class InvestrosComponent implements OnInit {
  investorData: any[] = [];

  constructor(public formSrvc : FormService){}

  ngOnInit(): void {
    this.getInvestors();
  }

  getInvestors(){
    this.formSrvc.getInvestor().subscribe((res:any)=>{
      this.investorData = res;
      console.log(this.investorData);
    })
  }
}
