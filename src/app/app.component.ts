import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { AppNoteListComponent } from '../app-note-list/app-note-list.component';
import { AddNoteComponent } from '../add-note/add-note.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
     RouterModule,
     AppNoteListComponent,
    AddNoteComponent,
    
  ],
})


export class AppComponent {
  title = 'documentaryBase';
}
