import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourservice',
  templateUrl: './ourservice.component.html',
  styleUrls: ['./ourservice.component.scss']
})
export class OurserviceComponent implements OnInit {
  showFrontendStacks: boolean;
  showInfraStacks: boolean;
  showBackendStacks:boolean;
  showDatabaseStacks:boolean;

  constructor() { 
    this.showFrontendStacks = false;
    this.showInfraStacks = false;
    this.showBackendStacks = false;
    this.showDatabaseStacks = false;
  }

  ngOnInit() {
  }

}
