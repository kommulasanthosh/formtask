import { Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Applicationform } from '../userform';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
applicationForm: Applicationform;
@Input() userForms: Applicationform;
@Input() isUser: boolean;
@Output() formData: EventEmitter<Applicationform> = new EventEmitter();
  constructor(private activemodel:NgbActiveModal) { }

  ngOnInit(): void {
    if(this.isUser){
      this.applicationForm = this.userForms;
    } else {
      this.applicationForm=new  Applicationform()
    }
    
  }

  submitApplication(){
    console.log(this.applicationForm)
    this.formData.emit(this.applicationForm);
    this.activemodel.close()
  }
  closeApplication(){
    this.activemodel.close()
  }
}
