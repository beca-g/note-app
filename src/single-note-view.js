class SingleNoteView {
  constructor(note) {
    this.note = note;
  }

  makeHtml() {
    return `<div>${this.note.text}</div>`;
  }
}