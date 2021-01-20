import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationComponent } from '../application/application.component';
import { HomeService } from '../home.service';
import { Applicationform } from '../userform';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tableData:Array<any>= new Array<any>();
  constructor(
    private router:Router,
    private homeservice:HomeService,
    private appservice:NgbModal
    ) { }

  ngOnInit(): void {
    this.showData()
  }
  showData()
  {
    this.homeservice.showData().subscribe((responce:any)=>{
      this.tableData=responce.data;
    })
  }
  clickadd() {
    const user = this.appservice.open(ApplicationComponent);
    user.componentInstance.formData.subscribe((receivedEntry) => {
     console.log(receivedEntry);
     this.tableData.push(receivedEntry);
     localStorage.setItem('tableData', JSON.stringify(this.tableData));
    });
    
  }

  clickEdit(data: Applicationform, index: number) {
    const user = this.appservice.open(ApplicationComponent);
    user.componentInstance.userForms = data;
    user.componentInstance.isUser = true;
    user.componentInstance.formData.subscribe((receivedEntry) => {
      this.tableData[index] = receivedEntry;
    });
  }

  clickDelete(index: number) {
    console.log(index)
    this.tableData.splice(index, 1);
   localStorage.setItem('tableData', JSON.stringify(this.tableData));
  }

}