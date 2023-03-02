import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [doing, setDoing] = useState([
    {
      bigTd: '리액트를 공부하자',
    },
    {
      bigTd: '노드를 공부하자',
    },
    {
      bigTd: '스프링를 공부하자',
    },
  ])
  const [bigTd, setBigTd] = useState('')

  const changeBigTdHandler = (event) => {
    setBigTd(event.target.value)
  }
  const clickButtonForAdd = () => {
    const newDoing = {
      bigTd,
    }
    setDoing([...doing, newDoing])
    setBigTd('')
  }

  return (
    <div className="app">
      <div className="head">
        <input value={bigTd} onChange={changeBigTdHandler} />
        <button onClick={clickButtonForAdd}>추가하기</button>
      </div>
      <div className="head">
        <h1>My Todo List</h1>
      </div>
      <div className="toDoBox">
        {doing.map((item) => {
          return (
            <div key={item.id} className="box-style">
              <p>{item.bigTd}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
