import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  // navBg: any;

  // @HostListener('document:scroll') scrollover(){

  //   if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
  //     this.navBg = {
  //       'background-color':'white',
  //       'color':'red',
  //     }
  //   }else{
  //     this.navBg = {}
  //   } 
  // }

  constructor(private activateRoute : ActivatedRoute){

  }

  ngOnInit(): void{
    this.activateRoute.fragment.subscribe((value:any)=>{
      console.log(value);
      this.jumpTo(value);
    })
  }

  jumpTo(section:any){
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
  }

}
