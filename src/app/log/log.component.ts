import { Component } from '@angular/core';
import { Users } from '../user';
@Component({
  selector: 'app-log',
  standalone: true,
  imports: [],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent {
  public username:string='';
  public password:string='';
  public click(){
    console.log (this.username)
   var results = Users.find(x=> x.username == this.username && x.password == this.password);
   debugger 
   if (results == undefined)
      console.log ('User ne postoji')
  }
}
