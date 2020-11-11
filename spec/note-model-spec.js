"use strict";
(function() {
  let note = new Note("I will get better at Javascript");

  function textIsNotEmpty() {

    assert.isTrue(note.text === "I will get better at Javascript");
    console.log("Test passed: text is not empty");
  };
  textIsNotEmpty();

  function canViewText() {
    assert.isTrue(note.viewNote() === "I will get better at Javascript");
    console.log("Test passed: can view text")
  }

  canViewText();
})(this);

