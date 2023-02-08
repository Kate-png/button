import './App.css';
import './component/CheckBox'
import CheckBox from './component/CheckBox';
import Comment from './component/Comment';

function App() {
  return (
    <div className='wrapper'>
      <header>
        <h1 className='text'>Виды кнопок</h1>
        
          <li className='li'>Чек-бокс</li>
          <CheckBox></CheckBox>

          <li className='li'>Ввод текста</li>    
          <Comment></Comment>              
        
      </header>
    </div>
  );
}

export default App;
