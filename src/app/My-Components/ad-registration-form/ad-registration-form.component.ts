import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-ad-registration-form',
  templateUrl: './ad-registration-form.component.html',
  styleUrls: ['./ad-registration-form.component.css']
})
export class AdRegistrationFormComponent implements OnInit {
  // ads:any = '';
  message: boolean = false;
  private brandLogoFile?: File;
  private posterFile?: File;
  public appData!: any[];
  public placeData!: any[];
  constructor(private http: HttpClient, private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.http
      .get<any[]>('http://localhost:7000/api/ads/apps')
      .subscribe((data) => {
        this.appData = (data as any).data;
        // console.log('appData', this.appData);
      });
    this.http
      .get<any[]>('http://localhost:7000/api/ads/place/list')
      .subscribe((data) => {
        this.placeData = (data as any).data;
        // console.log("placeData", this.placeData);
      });
  }

  // Create Advertisement
  brandLogoChange(event: any) {
    let fileList: FileList = event.target.files;
    this.brandLogoFile = fileList[0];
  }
  posterChange(event: any) {
    let fileList: FileList = event.target.files;
    this.posterFile = fileList[0];
    // console.log(fileList[0]);
  }
  getUserFormData(data: any | JSON) {
    console.log("data", data);
    let formData: FormData = new FormData();
    for (var key in data) {
      formData.append(key, data[key]);
    }

    if (this.brandLogoFile) {
      formData.append("brand_logo", this.brandLogoFile);
    }
    if (this.posterFile) { formData.append("poster", this.posterFile) }

    this.apiService.createAdvertisement(formData).subscribe((result: any) => {
      console.warn('result', result);
      // this.gridApi.applyTransaction({ add: newItems, addIndex: 2 });
      this.message = true;
      reloadCurrentPage();
    });
    function reloadCurrentPage() {
      window.location.reload();
    }
  }
  // removeMessage(){
  //   this.message = false;
  // }
}
