"use strict";

(function(exports) {
  function testTextInstantiation() {
    let note = new Note('My favourite language is JavaScript');

    if (note.text !== 'My favourite language is JavaScript') {
      throw new Error(`Expected 'My favourite language is JavaScript' but got ${note.text}`)
    }
  };
  testTextInstantiation();
})(this);
