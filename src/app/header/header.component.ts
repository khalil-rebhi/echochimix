import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  socialLinks : {facebook : string , instagram : string, linkedin : string} = { facebook : "#" , instagram : "#" , linkedin : "#"}

}
