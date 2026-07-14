import React from 'react'
import { CounterApp } from './Components/Counter/Counter'
import { Calculator } from './Components/Calculator/Calculator'
import { InputValues } from './Components/InputValues/InputValues'
import { Background } from './Components/Background/Background'

function App(){
  return(
    <>
    <CounterApp/>
    <Calculator/>
    <InputValues/>
    <Background/>
    </>
  )

}
export default App