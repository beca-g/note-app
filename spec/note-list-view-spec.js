'use strict';

(function() {
  let note = new NoteList();
  note.add("Hello world, today is a lovely day");
  note.add("Ciao mondo");
  let noteListView = new NoteListView(note);

  function hasNoteList() {
    assert.isTrue(noteListView.noteList === note.noteList);
    console.log("Test passed: NoteListView instantiated with a list of notes");
  }
  hasNoteList();

  function hasHtml() {
    assert.isTrue(noteListView.createHtml() === `<ul><li><div><a id="0" href="#note/0">Hello world, today i</a></li></div><li><div><a id="1" href="#note/1">Ciao mondo</a></li></div></ul>`);
    console.log("Test passed: NoteListView has html")
  }
  hasHtml();
})(this);