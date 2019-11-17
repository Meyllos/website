import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-technologie',
  templateUrl: './technologie.component.html',
  styleUrls: ['./technologie.component.scss']
})
export class TechnologieComponent implements OnInit {

  @Output() clickMenuLinkActive = new EventEmitter<string>();

  showContentStack : any = 'frontend';
  isSelectedMenu   : any = 'frontend';

  constructor() { }

  ngOnInit() {
  }

  clickMenu(link){
    console.log(link);
    if(link == 'a'){
      this.isSelectedMenu = 'frontend';
      this.clickMenuLinkActive.emit(this.isSelectedMenu);
      this.showContentStack = 'frontend';
    }else if(link == 'b'){
      this.isSelectedMenu = 'backend';
      this.clickMenuLinkActive.emit(this.isSelectedMenu);
      this.showContentStack = 'backend';
    }else if(link == 'c'){
      this.isSelectedMenu = 'mobile'
      this.clickMenuLinkActive.emit(this.isSelectedMenu);
    }else if(link == 'd'){
      this.isSelectedMenu = 'database'
      this.clickMenuLinkActive.emit(this.isSelectedMenu);
    }else if(link == 'e'){
      this.isSelectedMenu = 'infrastructure'
      this.clickMenuLinkActive.emit(this.isSelectedMenu);
    }else{
      this.isSelectedMenu = 'autotest'
      this.clickMenuLinkActive.emit(this.isSelectedMenu);
    }
  }

}
