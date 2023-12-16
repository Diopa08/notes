import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NOTES } from '../notes';
import { Router,  RouterModule } from '@angular/router';


@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule , RouterModule],
  templateUrl:'add-note.component.html',
  styleUrl: './add-note.component.css'
})
export class AddNoteComponent {
  router = inject(Router);

addNoteForm=new FormGroup({
  title:new FormControl('', Validators.required ),
  text: new FormControl(''),
});
addNote(){
  let title = this.addNoteForm.value.title ??'';
  let text = this.addNoteForm.value.text ??'';
 
 if (this.addNoteForm.valid){
   let ids = NOTES.map((a)=> a.id);
   let maxId = 0;
   if (ids.length>0){
     maxId = Math.max(...ids);
   }
  let newNote = {
    id: maxId + 1,
    title:title,
    text: text,
  };
  NOTES.unshift(newNote);
  this.addNoteForm.reset();

  this.router.navigateByUrl('/');
}

}
return(){
  this.router.navigateByUrl('/');
}
}