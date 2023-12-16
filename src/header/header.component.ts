import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 [class.title]="true" >
    {{ title }}
</h1>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'My Notes';
  image1='assets/anges.jpg';
  login() {
    alert('Welcome!');
  }
  isRed = false;

change() {
  this.isRed = !this.isRed;
}
products = [
'apple', 'orange',
 'banana'];
}
