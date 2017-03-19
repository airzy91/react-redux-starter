import React, { Component } from 'react';

class NoteForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      value: ''
    };
  }

  _onTitleUpdate = (event) => {
    this.setState({ title: event.target.value });
  }

  _onValueUpdate = (event) => {
    this.setState({ value: event.target.value });
  }

  _onSubmit = (event) => {
    event.preventDefault();
    this.props.onSave({ title : this.state.title, value: this.state.value });
  }

  render(){
    return (
      <form onSubmit={this._onSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={this.state.title} onChange={this._onTitleUpdate}/>
        </div>
        <div>
          <label>Note:</label>
          <textarea value={this.state.value} onChange={this._onValueUpdate}/>
        </div>
        <input type="submit" value="Save"/>
      </form>
    );
  }
}

export default NoteForm;
