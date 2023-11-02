
import { useState } from 'react'
import Card from './components/card/Card'
import Form from './components/form/Form'


function App() {
  const [persona, setPersona] = useState()

  function handleSubmit(persona) {
    setPersona(persona)
    console.log(persona.name);
  }
  
  return (
    <>
      <Form onSubmit={handleSubmit}/>
      
      {persona ? <Card name= {persona.name} raza={persona.raza}/> : null}
    </>
  )
}

export default App

