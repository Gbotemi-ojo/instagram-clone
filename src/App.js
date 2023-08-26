import React from 'react'
import SignIn from './components/sign_in/Sign_in';
import SignUp from './components/sign_up/sign_up';
import Homepage from './components/homepage/Homepage';
import RouteSwitch from './components/router/RouterSwitch';
function App() {
  return (
    <div>
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <Homepage /> */}
      {<RouteSwitch />}
    </div>
  )
}
export default App;
