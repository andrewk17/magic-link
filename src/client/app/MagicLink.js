import React from 'react';

const MagicLink = () => {

  // example POST request
  const fetchPing = () => {
    fetch('/ping', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({foo: 'bar'}),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      }).catch(err => {
        console.log(err);
      }
    );
  };

  return (
    <div>
      <p>Hello World!</p>
      <button onClick={ fetchPing }>Submit</button>
    </div>
  );
};

export default MagicLink;
