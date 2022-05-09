import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef, GridReadyEvent, GridOptions, Grid } from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AdDeleteComponent } from '../ad-delete/ad-delete.component';

// import 'ag-grid-enterprise';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})

export class AdListComponent {

  public columnDefs: ColDef[] = [
    // set filters
    { headerName: 'ID', field: '_id', filter: true, lockPosition: true, suppressNavigable: true },
    // // number filters
    { headerName: 'Brand Name', field: 'brand_name', filter: 'agSetColumnFilter', editable: true },
    // { headerName: 'Brand Logo', field: 'brand_logo', filter: 'agSetColumnFilter', editable: true },
    // { headerName: 'App Id', field: 'app_id', filter: 'agNumberColumnFilter' },
    // { headerName: 'Place Id', field: 'place_id', filter: 'agNumberColumnFilter' },
    { headerName: 'App Name', field: 'app_name', filter: 'agNumberColumnFilter' },
    { headerName: 'Place Name', field: 'place_name', filter: 'agNumberColumnFilter' },
    { headerName: 'Rank', field: 'rank', maxWidth: 120, filter: 'agNumberColumnFilter' },
    { headerName: 'Start Date Time', field: 'start_date_time', filter: 'agDateColumnFilter' },
    { headerName: 'End Date Time', field: 'end_date_time', filter: 'agNumberColumnFilter' },
    { headerName: 'Status', field: 'status', maxWidth: 150 },
    { headerName: 'Campaign Title', field: 'campaign_title', filter: false },
    // { headerName: 'Poster Type', field: 'poster_type', maxWidth: 150, filter: "agSetColumnFilter" },
    // { headerName: 'Poster', field: 'poster', filter: false },
    // { headerName: 'Payment Method', field: 'payment_method', filter: false },
    { headerName: 'Is Partial Payment', field: 'is_partial_payment', maxWidth: 150, filter: 'false' },
    { headerName: 'Gross Value', field: 'gross_price', filter: 'agNumberColumnFilter' },
    { headerName: 'Net Value', field: 'net_price', filter: 'false' },
    { headerName: 'Pending Amount', field: 'pending_amount', maxWidth: 150, filter: 'false' },
    { headerName: 'Tax', field: 'tax', maxWidth: 120, filter: 'false' },
    { headerName: 'Actions', cellRendererFramework: AdDeleteComponent }
  ];

  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 250,
    resizable: true,
    floatingFilter: true,
    sortable: true,
  };
  public rowData!: any[];

  constructor(private http: HttpClient) { }

  onGridReady(params: GridReadyEvent) {
    this.http
      .get<any[]>('http://localhost:7000/api/ads/list')
      .subscribe((data) => {
        // console.log("Data", data);
        this.rowData = (data as any).data;
      });
  }

  // public exportTableToExcel(): void {
  //   const downloadLink = document.createElement('a');
  //   const dataType = 'application/vnd.ms-excel';
  //   const table = document.getElementById('httptrace-table');
  //   const tableHtml = table?.outerHTML.replace(/ /g, '%20');
  //   // const fileName = 'httptrace.xls';
  //   document.body.appendChild(downloadLink);
  //   downloadLink.href = 'data:' + dataType + ' ' + tableHtml;
  //   downloadLink.download = 'httptrace.xls';
  //   downloadLink.click();
  // }
}
