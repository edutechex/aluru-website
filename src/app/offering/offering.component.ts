import { Component, OnInit } from '@angular/core';
import { FormService } from '../service/form.service';

@Component({
  selector: 'app-offering',
  templateUrl: './offering.component.html',
  styleUrls: ['./offering.component.css']
})
export class OfferingComponent implements OnInit{
  allCfrpList: any;
  allCfrpContent: any;


  constructor(
    public formService : FormService,
  ){}

  ngOnInit(): void {
    this.getCfrpData();
    this.getCfrPContent();
  }

  getCfrPContent(){
    this.formService.getCfrpData().subscribe({
      next:(res)=>{
        this.allCfrpContent = res;
      },
      error:(err)=>{
        console.log(err.message);
      }
    })
  }

  getCfrpData(){
    this.formService.getOffering().subscribe({
      next:(res)=>{
        this.allCfrpList = res;
      },
      error:(err)=>{
        console.log(err.message);
      }
    })
  }
}
