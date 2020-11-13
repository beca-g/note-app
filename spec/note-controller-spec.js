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
    assert.isTrue(appDiv.innerHTML === '<ul><li><div><a id="0" href="#note/0">Favourite drink: sel</a></div></li><li><div><a id="1" href="#note/1">Hello world</a></div></li></ul>');
    console.log("Test passed: NoteController can updated the innerHTML of the app element")
  }
canChangeInnerHtml();

  function canListenForHashChanged() {
    let link = document.getElementById('0')
    let link2 = document.getElementById('1')
    link.click()
    link2.click()
    assert.isTrue(window.location.hash === '#note/1')
  }
  canListenForHashChanged();

  function canUpdateContent() {
    let link = document.getElementById('0')
    let link2 = document.getElementById('1')
    link.click()
    link2.click()
    setTimeout(function() { assert.isTrue(document.getElementById("app").innerHTML === "<div>Hello world</div>") }, 1000)
    console.log("Test passed: App div updated!")
  }
  canUpdateContent();
})();
