class NoteList {
  constructor() {
    this.notes = [];
  }

  add(text) {
    this.notes.push(text);
  }

  view() {
    return this.notes
  }
}