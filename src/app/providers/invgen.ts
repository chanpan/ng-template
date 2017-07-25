import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

//Observable
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
 
//model
import { Inv } from '../models/inv';

//global
import { globalValiable } from '../blobal_valiable/globalVariables';


@Injectable()
export class InvgenService {
    private url = globalValiable.apiUrl;
    constructor(private http:Http){}

    invgen(params:string):Observable<Inv[]>{
        return this.http
               .get(`${this.url}${params}`)
               .map((res:Response)=><Inv[]> res.json())
               .catch(this.handleError);
    }
    private handleError(error:any){
        return Observable.throw(error.json().errorMessage || 'เกิดข้อผิดพลาดจาก Server');
    }        
}
