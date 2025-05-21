import { useState } from "react"
import { schema } from "../LoginSchema"
import { yupToFormErrors } from "../utils/yupToFormErrors"

function LoginForm (){
  const styles = {
    divInput: "flex gap-2",
    input: "border-1 rounded-lg",
    textErrors: "text-red-300"
  }

  const [form,setForm] = useState({
    email: "",
    password: "",
    day:"",
    age:""
  })

  const [errors ,setErrors] = useState({})

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
   try {
    await schema.validate(form, {abortEarly: false})
      alert('เสร็จแล้ว');
      setErrors({})
   } catch(err) {
    const errObj = yupToFormErrors(err)
    setErrors(errObj);

   }

  }
  
console.log(form)
  return (
    <>
    <p className='text-2xl font-bold pb-10'>CC 20 Login Form</p>
      <form className='space-y-2' onSubmit={handleSubmit}>
        <div className={styles.divInput}>
          <label>Email</label>
          <input className={styles.input} type='email' name='email' onChange={handleChange} value={form.email}/>
          <p className={styles.textErrors}>{errors.email}</p>
        </div>
        <div className={styles.divInput}>
          <label>Password</label>
          <input className={styles.input} type="password" name='password' onChange={handleChange} value={form.password}/>
          <p className={styles.textErrors}>{errors.password}</p>

        </div>
        <div className={styles.divInput}>
          <label>Day</label>
          <input className={styles.input} type="day" name='day' onChange={handleChange} value={form.day} />
          <p className={styles.textErrors}>{errors.day}</p>

        </div>
        <div className={styles.divInput}>
          <label>Age</label>
          <input className={styles.input} type="age" name='age' onChange={handleChange} value={form.age}/>
          <p className={styles.textErrors}>{errors.age}</p>

        </div>
        <button type='submit'>Login</button>
      </form>
    </>
  )
}
export default LoginForm
