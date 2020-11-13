'use strict';

class NoteList {
  constructor() {
    this.notes = [];
  }

  add(str) {
    let note = new Note(str);
    this.notes.push(note);
  }

  view() {
    return this.notes;
  }
}