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

})(this);