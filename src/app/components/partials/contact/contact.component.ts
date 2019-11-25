import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ContactService} from '../../../services/contact.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted       = false;
  loadingSubmit   = false;
  TextBtnSignup   = true;

  errorShow:any   = false;
  succesShow:any  = false;
  sendingShow:any = false;

  // pattern 
  fullnamePattern = '^[a-z0-9_-]{8,15}$';
  phonePattern    = '^[a-z0-9_-]{8,15}$';

  constructor( 
    private formBuilder: FormBuilder,
    private sendcontactForm: ContactService
    ) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      fullname: ['', Validators.required],
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
         this.errorShow = true;
      return ;
   }
    this.loadingSubmit = true;
    this.TextBtnSignup = false;
    this.errorShow     = false;
    this.sendingShow   = true;

    //this.notifyService.showWait('Please Wait.....', 'Account creation');

    setTimeout(()=>{
      this.sendcontactForm.sendContact(this.contactForm.value)
      .pipe(first()).subscribe(
        data =>{
          console.log(data)
          this.succesShow      = true;
          this.loadingSubmit   = false;
          this.TextBtnSignup   = true;
          this.errorShow       = false;
          this.sendingShow     = false;
          this.contactForm.reset();
          this.submitted = false;
        },
        error => {
          this.errorShow     = true;
          this.loadingSubmit = false;
          this.TextBtnSignup = true;
        }
      );

    }, 8000);
    
  }

}
