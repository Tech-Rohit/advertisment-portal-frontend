import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import AppUtils from 'src/app/utils/AppUtils';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-ad-update',
  templateUrl: './ad-update.component.html',
  styleUrls: ['./ad-update.component.css']
})

export class AdUpdateComponent implements OnInit {
  data: any;
  id: any;
  params: any;
  dataToBeUpdated: any;
  private brandLogoFile?: File;
  private posterFile?: File;
  message: boolean = false;
  constructor(private apiService: ApiService, private router: Router, private http: HttpClient) {
    this.dataToBeUpdated = this.router.getCurrentNavigation()?.extras.state;
  }
  ngOnInit(): void { }

  brandLogoChange(event: any) {
    let fileList: FileList = event.target.files;
    this.brandLogoFile = fileList[0];
    // console.log("Brand Logo File", this.brandLogoFile);
  }
  posterChange(event: any) {
    let fileList: FileList = event.target.files;
    this.posterFile = fileList[0];
    // console.log("Poster File", this.posterFile);
    // console.log(fileList[0]);
  }
  getUserFormData(data: any | JSON) {
    // console.log("Update Form Data", data);
    var sanitizedData = AppUtils.nullPropsRemover(data);
    console.log(sanitizedData);

    // let formData: any = new FormData();
    var formData = new FormData();
    for (var key in sanitizedData) {
      formData.append(key, sanitizedData[key]);
    }
    // formData.append("status", data.tax);
    // formData.append("status", data.status);
    // formData.append("poster_type", data.poster_type);

    formData.append("brand_logo", this.brandLogoFile!);
    formData.append("poster", this.posterFile!);

    this.id = this.dataToBeUpdated._id;
    this.http.put(`http://localhost:7000/api/ads/update/${this.id}`, formData).subscribe(response => {
      // console.log(response);
      this.message = true;
    });
  }
  // updateAd(){
  //   console.log(this.dataToBeUpdated._id);
  //   this.id =  this.dataToBeUpdated._id;
  //   this.apiService.updateAdvertisement(this.data, this.id)
  //   .subscribe(response => {
  //     console.log(response)
  //   });
  // }

}


























    // export class AdUpdateComponent implements OnInit {
    //   data: any;
    //   id: any;
    //   params: any;
    //   rowData: any;
    //   private brandLogoFile?: File;
    //   private posterFile?: File;
    //   constructor(private http: HttpClient, private router: Router, private apiService: ApiService, private route:ActivatedRoute) { }
    //   // agInit(params : any) {
    //   //   this.params = params;
    //   //   this.data = params.value;
    //   // }
    //   ngOnInit(): void {}

    //   // Create Advertisement
    //   brandLogoChange(event: any) {
    //     let fileList: FileList = event.target.files;
    //     this.brandLogoFile = fileList[0];
    //     // console.log(this.brandLogoFile);
    //   }
    //   posterChange(event: any) {
    //     let fileList: FileList = event.target.files;
    //     this.posterFile = fileList[0];
    //     // console.log(fileList[0]);
    //   }
    //   getUserFormData(data: any | JSON) {
    //     // console.log("data", data);
    //     let formData: FormData = new FormData();
    //     for (var key in  data) {
    //       formData.append(key, data[key]);
    //     }

    //     if(this.brandLogoFile){
    //       formData.append("brand_logo", this.brandLogoFile);
    //     }
    //     if(this.posterFile){formData.append("poster", this.posterFile)}

    //     // this.apiService.createAdvertisement(formData).subscribe((result: any) => {
    //     //   console.warn('result', result);
    //     //   reloadCurrentPage();
    //     // });
    //     // function reloadCurrentPage() {
    //     //   window.location.reload();
    //     //  }
    //   }
    //   updateAd(){
    //     // console.log("update ad work");
    //     // this.route.params.subscribe(
    //     //   (params) => {
    //     //     console.log("params.get('id')", params['id']);
    //     //   });
    //     // console.log("working: " + this.params.data._id);
    //     // this.id = this.params.data._id;
    //     // console.log(this.id);
    //     this.apiService.updateAdvertisement(this.data, this.id)
    //     .subscribe(response => {
    //       console.log(response)
    //     });
    //   }

    //   }

