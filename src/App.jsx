import React from 'react'
import Movies from './components/Movies'

function App() {
  return (
    <>
    <div style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center',textAlign:'center',padding:'3rem',borderRadius:'10px'}}>
      <h1>
        MovieZone
      </h1>
    </div>
    <Movies />
    </>
  )
}

export default App