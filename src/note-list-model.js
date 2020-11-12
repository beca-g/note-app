'use strict';

class NoteList {
  constructor() {
    this.notes = [];
  }

  add(str) {
    this.notes.push(str);
  }

  view() {
    return this.notes
  }
}