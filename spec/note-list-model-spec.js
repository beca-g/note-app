(function() {
  function hasAnEmptyArray() {
    let noteList = new NoteList();
    assert.isTrue(noteList.notes.length === 0);
    console.log("Test passed: The class is instantiated with an empty array")
  }
  hasAnEmptyArray();

})(this);