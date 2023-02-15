import React from 'react';
import './App.css';
import './component/CheckBox'
import CheckBox from './component/CheckBox';
import Comment from './component/Comment';
import Modal from './component/Modal';

const elements = [ 
  { name: 'Element1' }, 
  { name: 'Element2' },
  { name: 'Element3' }, 
  { name: 'Element4' }, 
];

function App() {

  function addValue(title){
    console.log(title)
  }
  
  return (
    <div>
      <header>
      <h1>My buttons</h1>
      </header>
      <body>
        <div className='div-body'>
        
          <li className='li'>CheckBox</li>
          <CheckBox></CheckBox>

          <li className='li'>Input-text</li>    
          <Comment onCreate={addValue}></Comment>  
          
          <li className='li'> Modal</li>
          <Modal></Modal>

          <li className='li'> Array</li>
          {
          elements.map(item => item.name + "\n")
          }

        </div>          
      
      </body>
    </div>
  );
}

export default App;
