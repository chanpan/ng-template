 
import { Component, OnInit } from '@angular/core';
//model
import { Inv } from '../../../models/inv';
//Service
import { InvgenService } from '../../../providers/invgen';

//router
import { RouterModule, Router } from '@angular/router';

//rxjs 
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-invgen',
  templateUrl: 'invgen.html',
  providers:[InvgenService] 
})
export class Invgen{ 
  sub:Subscription;
  errorMessage:string;
  invgen:Array<Inv>;
  constructor(private inv:InvgenService,private router: Router,){
    this.Invgen();
  }
    Invgen(){
      this.sub = this.inv.invgen('ezform-module/inv-gen').subscribe(
        (res)=>{
          this.invgen = res;
        },
        (error)=>{console.log(error)}//this.errorMessage=<any>error
      );
    }//Invgen
    Ezform(invgen:any){
      //console.log(invgen.ezf_id);
      this.router.navigate(['/ezform', invgen.ezf_id]);
      
    }//Ezform
}
