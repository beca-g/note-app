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

let insertNote = new NoteController;
insertNote.insertHtml();


// let element = document.getElementById("app").innerHTML = "Howdy";
// console.log(element)