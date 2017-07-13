class NoteTitle extends React.Component {
  onClick() {
    console.log('I was clicked', this.props.name);
  }
  render(){
    return (
      <li onClick={this.onClick.bind(this)}>{this.props.name}</li>
    )
  }
}

class NoteTitleList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.notes.map( note => {
          return (
            <NoteTitle name={note.name} />
          )
        }
      )}
      </ul>
    )
  }
}

function requestListener () {
  var notes = [JSON.parse(this.responseText)][0];
  ReactDOM.render(<NoteTitleList titles={notes} />,
    document.getElementById('app'));
  //ReactDOM.render(
  //  React.createElement('ul', { className: "notes" },
  //    notes.map((note, i) =>
  //      React.createElement('li', { key: i }, note.title)
  //    )
  //  ),
  //  document.getElementById('notes')
  //)
};

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", requestListener);
oReq.open("GET", "http://localhost:3000/notes");
oReq.send();
