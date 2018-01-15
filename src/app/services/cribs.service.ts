import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CribsService {
  public newCrib = new Subject<any>();	

  constructor(private http: Http) { }

  getCribs() {
  	return this.http.get('assets/cribs.json')
  		.map(res => res.json());
  }

  addCrib(data) {
  	data.image = 'default-crib';
  	this.newCrib.next(data);
  }

}
