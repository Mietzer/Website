import { Component } from '@angular/core';
import { HeaderbuttonComponent } from "../headerbutton/headerbutton.component";

@Component({
  selector: 'app-header',
  imports: [HeaderbuttonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
