import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted     = false;
  loadingSubmit = false;
  TextBtnSignup = true;

  // pattern 
  fullnamePattern = '^[a-z0-9_-]{8,15}$';
  phonePattern = '^[a-z0-9_-]{8,15}$';

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      fullname: ['', [Validators.required, Validators.pattern(this.fullnamePattern)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(this.phonePattern)]],
      message: ['', [Validators.required, Validators.maxLength(256)]],
    });
  }

  get bb() { return  this.contactForm.controls; }
  onSubmit(){
    this.submitted = true;
    console.log(this.contactForm.value);
    if (this.contactForm.invalid) {
      alert('Please fill in the fields correctly');
      return ;
   }
    this.loadingSubmit = true;
    this.TextBtnSignup = false;
    this.contactForm.reset();
  }

}
