'use strict';

class NoteList {
  constructor() {
    this.notes = [];
    this.id = 0;
  }

  add(str) {
    let note = new Note(str, this.id);
    this.notes.push(note);
    this.id++; 
  }

  view() {
    return this.notes;
  }
}