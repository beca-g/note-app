(function() {
  let noteController = new NoteController();

  function canBeInstantiated() {
    assert.isTrue(noteController instanceof NoteController);
    console.log("Test passed: NoteController is instantiated")
  }
  canBeInstantiated();

  function canChangeInnerHtml() { 
    appDiv = document.getElementById("app");
    noteController.insertHtml();
    console.log(appDiv.innerHTML);
    assert.isTrue(appDiv.innerHTML === "<ul><li><div>Favourite drink: seltzer</div></li></ul>");
    console.log("Test passed: NoteController can updated the innerHTML of the app element")
  }
  canChangeInnerHtml();
})();