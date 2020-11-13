'use strict';

class NoteListView {
  constructor(notes) {
    this.notes = notes;
  }
  createHtml() {   
    let body = this.notes.view().map(note => `<li><div>${note}</li></div>`).join("");

    let openTag = "<ul>";
    let closeTag = "</ul>";

    return `${openTag}${body}${closeTag}`

  }
}
