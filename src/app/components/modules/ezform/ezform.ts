 
import { Component, OnInit } from '@angular/core';
//model
import { Inv } from '../../../models/inv';
//Service
import { InvgenService } from '../../../providers/invgen';

//router
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

//rxjs 
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-ezform',
  templateUrl: 'ezform.html',
  providers:[InvgenService] 
})
export class Ezform{ 
  sub:Subscription;
  errorMessage:string;
  invgen:Array<Inv>;
  constructor(private inv:InvgenService,private router: Router,private routParams:ActivatedRoute){
    console.log(this.routParams.snapshot.params["ezf_id"]);
  }
     
}
