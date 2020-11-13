'use strict';

class NoteListView {
  constructor(notes) {
    this.notes = notes;
  }

  createHtml() {   
    let body = this.notes.view().map(note => `<li><div><a id="${note.id}" href="#note/${note.id}">${note.text.slice(0, 20)}</a></div></li>`).join("");
    let openTag = "<ul>";
    let closeTag = "</ul>";
    return `${openTag}${body}${closeTag}`
  }
}
