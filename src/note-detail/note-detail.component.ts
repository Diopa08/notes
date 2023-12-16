import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NOTES } from '../notes';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [CommonModule,RouterModule, NgIf],
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css'
})
export class NoteDetailComponent {
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  note = NOTES.find((i) => i.id === this.id);

  deleteNote(id: number) {
    const index = NOTES.findIndex((note) => note.id === id);
    if (index !== -1) {
      NOTES.splice(index, 1);
      this.router.navigateByUrl('/');
  }
}
}