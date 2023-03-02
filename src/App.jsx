import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [doing, setDoing] = useState([
    {
      id: 0,
      bigTd: '고양이',
      smallTd: '고양이',
      isDone: false,
    },
    {
      id: 1,
      bigTd: '고양이',
      smallTd: '고양이',
      isDone: false,
    },
    {
      id: 2,
      bigTd: '고양이',
      smallTd: '고양이',
      isDone: true,
    },
    {
      id: 3,
      bigTd: '고양이',
      smallTd: '고양이',
      isDone: true,
    },
  ])
  const [bigTd, setBigTd] = useState('')
  const [smallTd, setSmallTd] = useState('')

  const changeBigTdHandler = (event) => {
    setBigTd(event.target.value)
  }
  const changeSmallHandler = (e) => {
    setSmallTd(e.target.value)
  }
  const clickButtonForAdd = () => {
    const newDoing = {
      id: doing.length + 1,
      bigTd,
      smallTd,
      isDone: false,
    }
    setDoing([...doing, newDoing])
    setBigTd('  적은 것을')
    setSmallTd('  지킬 준비는 되었느냐')
  }

  const clickDeleteButton = (id) => {
    const newDoing = doing.filter((doing) => doing.id !== id)
    setDoing(newDoing)
  }
  const clickDoneButtonHandler = (id) => {
    const letDoing = doing.map((doing) => {
      if (doing.id === id) {
        if (doing.isDone === false) {
          doing.isDone = true
        } else {
          doing.isDone = false
        }
      }
      return doing
    })
    setDoing([...letDoing])
  }

  return (
    <div className="app">
      <div className="hit">🤍 This page is made by ChoiSeoYoon 🤍</div>
      <div className="head">
        제목 :
        <input className="input" value={bigTd} onChange={changeBigTdHandler} />
        내용 :
        <input className="input" value={smallTd} onChange={changeSmallHandler} />
        <button className="aButton" onClick={clickButtonForAdd}>
          추가하기
        </button>
      </div>
      <div className="head1">
        <h1
          style={{
            fontSize: '32pt',
          }}
        >
          🤍 My Todo List 🤍
        </h1>
      </div>
      <h1
        style={{
          color: 'rgb(13, 98, 164)',
        }}
      >
        To Do 🐰 -----------------------------------------------------------------------🤍
      </h1>
      <br />
      <div className="toDoBox">
        {doing.map((item) => {
          if (item.isDone === false) {
            return (
              <div key={item.id} className="box-style">
                <div>
                  <p className="aFont">제목</p>
                  <p>{item.bigTd}</p>
                  <p className="aFont">내용</p>
                  <p>{item.smallTd}</p>
                </div>
                <div>
                  <button className="aButton" onClick={() => clickDeleteButton(item.id)}>
                    삭제
                  </button>
                  <button className="aButton" onClick={() => clickDoneButtonHandler(item.id)}>
                    완료
                  </button>
                </div>
              </div>
            )
          }
        })}
      </div>
      <h1
        style={{
          color: 'rgb(13, 98, 164)',
        }}
      >
        Done 🐻‍❄ ----------------------------------------------------------------------- 🤍
      </h1>
      <br />
      <div className="toDoBox">
        {doing.map((item) => {
          if (item.isDone === true) {
            return (
              <div key={item.id} className="box-style">
                <div>
                  <p className="aFont">제목</p>
                  <p>{item.bigTd}</p>
                  <p className="aFont">내용</p>
                  <p>{item.smallTd}</p>
                </div>
                <div className="bButton">
                  <button className="aButton" onClick={() => clickDeleteButton(item.id)}>
                    삭제
                  </button>
                  <button className="aButton" onClick={() => clickDoneButtonHandler(item.id)}>
                    취소
                  </button>
                </div>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default App
