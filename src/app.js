class Note extends React.Component{
  onClick() {
    console.log('I was clicked', this.props.title);
  }
  render() {
    return (
      <li onClick={this.onClick.bind(this)}>{this.props.title}</li>
    )
  }
}

class NoteList extends React.Component{
  render() {
    return (
      <ul>
        {this.props.notes.map( note => {
            return (
              <Note title={note.title} />
            )
          }
        )}
      </ul>
    )
  }
}

function requestListener () {
  var notes = [JSON.parse(this.responseText)][0];
  ReactDOM.render(<NoteList notes={notes} />,
    document.getElementById('app'));
};

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", requestListener);
oReq.open("GET", "http://localhost:3000/notes");
oReq.send();
