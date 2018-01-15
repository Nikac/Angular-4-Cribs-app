import { Component, OnInit } from '@angular/core';
import { Crib } from '../crib';
import { CribsService } from '../services/cribs.service';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'cribs-list',
  templateUrl: './cribs-list.component.html',
  styleUrls: ['./cribs-list.component.css']
})
export class CribsListComponent implements OnInit {

  cribs: Array<Crib> = [];
  error: string;
  sortField: string = 'price';
  sortFields: Array<any> = [
  	'address',
  	'area',
  	'bathrooms',
  	'bedrooms',
  	'price',
  	'type'
  ];
  sortDirection: string = 'asc';

  constructor(private cribsService: CribsService, private utilService: UtilService) { }

  ngOnInit() {
  	this.cribsService.getCribs()
  		.subscribe(
  			data => this.cribs = data,
  			error => this.error = error.statusText
  		)

  	this.cribsService.newCrib
  		.subscribe(data => this.cribs = [data, ...this.cribs]);
  }

}
