import React from 'react'

const Task_02 = () => {
    const friuts=["Bananna","Apple","Orange","Mango","Grapes"]
  return (
    <div>
      <h1>Display friuts as unorder list</h1>
      {friuts.map((x)=>(
        <ul>
            <li>{x}</li>
        </ul>
      ))}
    </div>
  )
}

export default Task_02
