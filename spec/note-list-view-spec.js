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
    assert.isTrue(noteListView.createHtml()) === "<ul><li><div>Hello world, today i</div><li><div>Ciao mondo</div></li></ul>"
    console.log("Test passed: NoteListView has html")
  }
  hasHtml();
})(this);