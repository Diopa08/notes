import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { AppNoteListComponent } from './app-note-list/app-note-list.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';


const routes: Routes = [
  
  { path: '', component: AppNoteListComponent },
  { path: 'list', component: AppNoteListComponent },
  { path: 'new', component: AddNoteComponent },
  { path: 'note/:id', component: NoteDetailComponent },

];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)
  ],
});
