"use strict";

(function() {
  let note = new Note("I will get better at Javascript", 0);

  function textIsNotEmptyAndHasID() {
    assert.isTrue(note.text === "I will get better at Javascript", 0);
    console.log("Test passed: text is not empty");
  };
  textIsNotEmptyAndHasID();

  function canViewText() {
    assert.isTrue(note.viewNote() === "I will get better at Javascript");
    console.log("Test passed: can view text")
  }

  canViewText();
})(this);

