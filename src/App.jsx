import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import * as Yup from 'yup'
import { schema } from './LoginSchema'
import { yupToFormErrors } from './utils/yupToFormErrors'
import LoginForm from './components/LoginForm'
import { SignUpForm } from './components/SignUpForm'



function App() {
  return(
    <div>
      {/* <LoginForm /> */}
      <SignUpForm />
    </div>
  )
}
export default App
