import { Component, OnInit } from '@angular/core';

export class Notes {
  title: String = '';
  content: String = '';
}

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  titleModel: String;
  contentModel: String;
  notes: Notes[];

  constructor() {
    this.titleModel = "";
    this.contentModel = "";
    const defaultNote: Notes = {
      title: 'Sample Note',
      content: 'This is default note'
    };
    this.notes = [ defaultNote ];
  }

  ngOnInit(): void {
  }

  createNotes() {
    const newNotes: Notes = {
      title: this.titleModel,
      content: this.contentModel
    };
    this.notes.push(newNotes);
    // reset fields
    this.titleModel = this.contentModel = '';
  }

}
