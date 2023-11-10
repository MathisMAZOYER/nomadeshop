import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  form : FormGroup;
  phoneNumber : String = '';
  email : String = '';
  questionTopic : String = '';
  message : String = '' ;
  precisionCharacterCounter : number = 0;

  showMessageDetails : Boolean = false;

  constructor(private formBuilder: FormBuilder, private logger : LoggerService) {
    this.form = this.formBuilder.group({
      phoneNumber: ['', [Validators.required, Validators.pattern('^(?:(?:\\+|00)33|0)[1-9](?:[. ]?[0-9]{2}){4}$')]],
      email:['', [Validators.required, Validators.email]],
      profesional: ['yes'],
      topic: ['', Validators.required],
      precisions: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(2000)]],
    });
  }

  updateMessage() {
    this.message = this.form.get('precisions')?.value;
  }

  updatePrecisionCharacterCount () {
    this.precisionCharacterCounter = this.message.length;
  }

  validation(){
    this.showMessageDetails = true;
    this.phoneNumber = this.form.get('phoneNumber')?.value;
    this.email = this.form.get('email')?.value;
    switch (this.form.get('topic')?.value) {
      case "purchase" : {
        this.questionTopic = "A purchase";
        break;
      }
      case "precision" : {
        this.questionTopic = "A product precision";
        break;
      }
      case "other" : {
        this.questionTopic = "Other";
        break;
      }
    }

    this.logger.log("The message has been sent.")
  }

  closeDetails() {
    this.showMessageDetails = ! this.showMessageDetails;
  }
}
