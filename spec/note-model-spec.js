"use strict";

function textIsNotEmpty() {
  let note = new Note("I hate JS");
  assert.isTrue(note.text === "I hate JS");
};

textIsNotEmpty();

function canViewText() {
  let note = new Note("Monday");
  assert.isTrue(note.viewNote === "Monday");
}
// (function(exports) {
//   function testTextInstantiation() {
//     let note = new Note('My favourite language is JavaScript');

//     if (note.text !== 'My favourite language is JavaScript') {
//       throw new Error(`Expected 'My favourite language is JavaScript' but got ${note.text}`)
//     }
//   };
//   testTextInstantiation();
// })(this);
