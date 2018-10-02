import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() {
    setTimeout(() => {
      this.allowNewService =true;
    }, 2000);
   }
  allowNewService = false;
  serverCreationStatus= 'no server was created';

  ngOnInit() {
   
  }
  onCreateServer(){
    this.serverCreationStatus= 'Server was created';
  }

}
