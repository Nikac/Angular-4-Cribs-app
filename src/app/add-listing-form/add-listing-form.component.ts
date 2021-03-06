import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CribsService } from '../services/cribs.service';

@Component({
  selector: 'add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {
  @ViewChild('newCribForm') newCribForm: NgForm;
  propertyTypes: Array<string> = ['House', 'Condo', 'Duplex'];	

  constructor(private cribsService: CribsService) { }

  ngOnInit() {
  }

  onCribSubmit(data): void {
  	this.cribsService.addCrib(data);
  	this.newCribForm.reset();
  }

}
