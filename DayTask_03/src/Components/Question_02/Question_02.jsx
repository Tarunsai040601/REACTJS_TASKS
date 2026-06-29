// Write JavaScript code that utilizes JSX rules to display various data types (e.g., strings, numbers,
// booleans, arrays, objects)

import React from 'react'

const Question_02 = () => {
    const arr=[12,67,89,90,100]
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            console.log(arr[i])
        }
    }
  return (
    <div>
        <h1>[{arr.join(",")}]</h1>
      <p>{arr.filter((x)=>x%2==0).map((x)=>{
        return<>
        <p>even_nums={x}</p></>
      })}</p>
    </div>
  )
}

export default Question_02
