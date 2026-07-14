import React from 'react'
import { CounterApp } from './Components/Counter/Counter'
import { Calculator } from './Components/Calculator/Calculator'
import { InputValues } from './Components/InputValues/InputValues'

function App(){
  return(
    <>
    <CounterApp/>
    <Calculator/>
    <InputValues/>
    </>
  )

}
export default App