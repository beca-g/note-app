'use strict';

class NoteController {
  constructor(noteList = new NoteList()) {
    this.noteList = noteList;
    this.noteList.add("Favourite drink: seltzer");
    this.noteList.add("Hello world")
    this.noteListView = new NoteListView(this.noteList);
  }

  insertHtml() {
    let element = document.getElementById("app");
    let str = this.noteListView.createHtml();
    element.innerHTML = str;
  }
}

function makeUrlChange() {
  window.addEventListener("hashchange", showCurrentNote);
}

function showCurrentNote() {
  showNote(getNoteFromUrl());
}

function getNoteFromUrl() {
  return window.location.hash.split("/")[1];
}

function showNote(id) {
  let noteContent = insertNote.noteList.view()[id].viewNote()
  document.getElementById("app").innerHTML = `<div>${noteContent}</div>`;
}

let insertNote = new NoteController;
insertNote.insertHtml();
makeUrlChange();



// let element = document.getElementById("app").innerHTML = "Howdy";
// console.log(element)
