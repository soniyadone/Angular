import { Injectable } from '@angular/core';
import { Itable } from './ITable';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpobj:HttpClient) { }

  private _url:string = "/assets/Data/tabledata.json";

  getTableData():Observable<Itable[]>
  {
    return this.httpobj.get<Itable[]>(this._url);
    
  }
}
