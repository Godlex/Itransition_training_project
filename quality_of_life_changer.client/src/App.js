import React from 'react';
import AuthForm  from './components/auth/AuthForm';
import RegisterForm from './components/auth/RegisterForm';


const App = () => {
  return (
      <div>
          <AuthForm/>
          <RegisterForm/>
      </div>
  )
}

export default App;