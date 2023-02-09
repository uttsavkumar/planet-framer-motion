import React from 'react'
import Header from './Header'
import Planets from './Planets'

const MainPage = () => {
  return (
    <>
      <div style={{ position: 'relative', overflow: 'hidden' }}>

        <div className="container-fluid main-div p-0" style={{ height: '100vh', backgroundColor: "hsl(240,67%,8%)", overflow: 'hidden' }}>
          <div className="star1">
          </div>
          <Header />
          <Planets />
        </div>
      </div>
    </>
  )
}

export default MainPage