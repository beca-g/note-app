'use strict';

(function() {
  let noteList = new NoteList();

  function hasAnEmptyArray() {
    assert.isTrue(noteList.notes.length === 0);
    console.log("Test passed: The class is instantiated with an empty array")  
  }
  hasAnEmptyArray();

  function canAddNotes() {
    noteList.add("Hello world")
    assert.isTrue(noteList.notes.length === 1);
    console.log("Test passed: Can add notes and store them in the notes array")
  }
  canAddNotes();

  function canViewNotes() {
    noteList.add("My dog doesn't listen to me");
    assert.isTrue(noteList.view()[1].text === "My dog doesn't listen to me");
    console.log("Test passed: Can view notes stored in the notes array")
  }
  canViewNotes();

  function notesHaveIds() {
    assert.isTrue(noteList.view().length === 2);
    assert.isTrue(noteList.view()[0].id === 0);
    assert.isTrue(noteList.view()[1].id === 1);
    console.log("Test passed: Notes have ID's")
  }
  notesHaveIds();
})(this);