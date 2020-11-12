'use strict';

(function() {
  let note = new NoteList();
  note.add("Hello world");
  note.add("Ciao mondo");
  let noteListView = new NoteListView(note);

  function hasNoteList() {
    assert.isTrue(noteListView.noteList === note.noteList);
    console.log("Test passed: NoteListView instantiated with a list of notes");
  }
  hasNoteList();

})(this);