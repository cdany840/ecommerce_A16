import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm = this.fb.group({
    first_name: '',
    last_name: '',
    company: '',
    to: '',
    phone_number: '',
    text: ''
  });

  constructor(private fb: FormBuilder, private contactoService: ContactoService){}

  sendEmail(){
    this.contactoService.sendEmail(this.contactForm.value);
  }
}
