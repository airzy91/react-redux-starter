import React, { Component } from 'react';

import NoteForm from './noteForm';
import Note from './note';

class NoteContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      note: {
        title: '',
        value: ''
      }
    };
  }

  _onNoteSaved = (note) => {
    this.setState({ note });
  }

  render(){
    return (
      <div>
        <NoteForm onSave={this._onNoteSaved} />
        <Note note={this.state.note} />
      </div>
    );
  }
}

export default NoteContainer;
