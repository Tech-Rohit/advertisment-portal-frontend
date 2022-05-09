import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-ad-delete',
  templateUrl: './ad-delete.component.html',
  styleUrls: ['./ad-delete.component.css']
})
export class AdDeleteComponent implements OnInit {
  data: any;
  id: any;
  params: any;
  rowData: any;
  constructor(private http: HttpClient, private router: Router, private SpinnerService: NgxSpinnerService) { }

  agInit(params: any) {
    this.params = params;
    this.data = params.value;
  }

  ngOnInit() { }

  //Delete Advertisement
  deleteAd() {
    // console.log("working: " + this.params.data._id);
    alert("Do you really want to delete these records? This process cannot be undone.");
    this.id = this.params.data._id;
    // console.log(this.id);
    this.http
      .delete<any[]>(`http://localhost:7000/api/ads/delete/${this.id}`)
      .subscribe((data) => {
        // console.log("Deleted");
        console.log(data);
      });
    this.SpinnerService.show();
    this.params.api.applyTransaction({ remove: [this.params.data] });
    this.SpinnerService.hide();
  }



  // Update Advertisement
  // updateAd(){
  //   console.log("working on update: " + this.params.data._id);
  //   this.id = this.params.data._id;
  //   // console.log(this.id);
  //   // console.log(this.params.data);
  // }
}
