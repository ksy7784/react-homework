import { useState } from 'react'
import './App.css'

function App() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState(new Date().getDate());
  const [day, setDay] = useState(new Date().getDay());
  const txt = [
    {wise : '늘 행복하고 지혜로운 사람이 되려면 자주 변해야 한다.',
    author : '공자'},
    {wise : '자신이 어떻게 변해왔는지 알려면 변하지 않은 곳으로 돌아가는 것보다 더 좋은 방법은 없다.',  author : '마크 트웨인'
    },
    {wise : '겁쟁이는 도망가는 것을 택하고, 용기있는 자는 위험을 택한다.', author : '조지 에이드'},
    {wise : '자신이 어떻게 변해왔는지 알려면 변하지 않은 곳으로 돌아가는 것보다 더 좋은 방법은 없다.', author : '넬슨 만델라' }
  ];
  const[text, setText] = useState(0);
  
  
  function add (){
    const newAdd = text;
    {
      newAdd < 3 ? setText(newAdd + 1) : setText(0);
    }
  };

  setTimeout(add, 4000);

  return (
    <div className="container">
      <div className='texts'>
        <div>{txt[text].wise}</div>
        <div>{txt[text].author}</div>
      </div>
      <div className='date'>
        <div className='weekDay'>
          {
          day === 0 ? '일요일' : day === 1 ? '월요일' : day === 2 ? '화요일' : day === 3 ? '수요일': day === 4 ? '목요일' : day === 5 ? '금요일' : day === 6 ? '토요일' : '일요일'  
          }
        </div>
        <div className='monthAndDate'>
          {month + 1} / {date}
        </div>
      </div>
      <div className="btn">
          <button onClick={add}>더 보기</button>
      </div>
    </div>
  )
}

export default App
