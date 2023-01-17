import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  export class AppComponent {

    newPost='NO CONTENT'
    enteredValue=''
// orsimply
data:any;

    onAddPost=()=>{
    this.newPost=this.enteredValue

    }



}
