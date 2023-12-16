import { Component, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { NOTES } from '../notes';
import { FormGroup,FormsModule, FormControl,Validators,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-note-list',
  standalone: true,
  
  templateUrl:'./app-note-list.component.html' ,
  styleUrl: './app-note-list.component.css',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgFor
    
   ],
})
export class AppNoteListComponent {
 notes=NOTES;
 

}


