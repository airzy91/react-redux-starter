import React from 'react';

const Note = ({ note }) => {
  return(
    <div>
      <h2>{note.title}</h2>
      <p>{note.value}</p>
    </div>
  );
};

export default Note;
