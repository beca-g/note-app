'use strict';

class NoteController {
  constructor(noteList = new NoteList()) {
    this.noteList = noteList;
    this.noteList.add("Favourite drink: seltzer");
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
  // console.log(document.getElementById("app").innerHTML);
  console.log(insertNote.noteList.view()[id])
  console.log(id)
  document.getElementById("app").innerHTML = `<div>${insertNote.noteList.view[id].viewNote}</div>`;  
  // console.log(document.getElementById("app").innerHTML);
}

let insertNote = new NoteController;
insertNote.insertHtml();
makeUrlChange();



// let element = document.getElementById("app").innerHTML = "Howdy";
// console.log(element)