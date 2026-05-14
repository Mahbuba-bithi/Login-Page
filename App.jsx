// import { useState } from 'react'
// import UserContext from './Context/userContext'

// function App() {

//   return(
//   <UserContextProvider>
//  <h1>react with bithi</h1>
//  <login/>
//  <profole/>
//  </UserContextProvider>
//   )
// }

// export default App




import UserContextProvider from "./Context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {

  return (
    <UserContextProvider>
      <h1>React with Bithi</h1>

      <Login />
      <Profile />

    </UserContextProvider>
  )
}

export default App;