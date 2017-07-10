function requestListener () {
  var notes = [JSON.parse(this.responseText)][0];
  ReactDOM.render(
    React.createElement('ul', { className: "notes" },
      notes.map((note, i) =>
        React.createElement('li', { key: i }, note.title)
      )
    ),
    document.getElementById('notes')
  )
};

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", requestListener);
oReq.open("GET", "http://localhost:3000/notes");
oReq.send();
