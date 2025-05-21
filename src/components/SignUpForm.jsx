import { useState, useRef } from "react"
import { yupToFormErrors } from "../utils/yupToFormErrors"
import { SignUpFormSchema } from "../utils/signUpFormSchema"




export function SignUpForm(){
  const styles = {
      divInput: "flex gap-2",
      input: "border-1 rounded-lg",
      textErrors: "text-red-500"
    }
  
    const [form,setForm] = useState({
      username: "",
      nickname: "",
      password:"",
      confirmPassword:"",
      tel:"",
      age:"",
      terms: ""
    })

    const refs = {
      username : useRef(null),
      nickname : useRef(null),
      password : useRef(null),
      confirmPassword : useRef(null),
      tel : useRef(null),
      age : useRef(null),
      terms : useRef(null)
    }
  
    const [errors ,setErrors] = useState({})
  
    const handleChange = (e) => {
      const {name,type,checked,value} = e.target;
      setForm({...form, [name]:type === "checkbox" ? checked : value})
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
     try {
      await SignUpFormSchema.validate(form, {abortEarly: false})
        alert('เสร็จแล้ว');
        setErrors({})
     } catch(err) {
      const errObj = yupToFormErrors(err, refs)
      setErrors(errObj);
  
     }
  
    }
    
  console.log(form)
    return (
      <>
      <p className='text-2xl font-bold pb-10'>CC 20 Login Form</p>
        <form className='space-y-2' onSubmit={handleSubmit}>
          <div className={styles.divInput}>
            <label>Username</label>
            <input ref={refs.username} className={styles.input} type='text' name='username' onChange={handleChange} value={form.username}/>
            <p className={styles.textErrors}>{errors.username}</p>
          </div>
          <div className={styles.divInput}>
            <label>Nickname</label>
            <input ref={refs.nickname} className={styles.input} type="text" name='nickname' onChange={handleChange} value={form.nickname}/>
            <p className={styles.textErrors}>{errors.nickname}</p>
  
          </div>
          <div className={styles.divInput}>
            <label>Password</label>
            <input ref={refs.password} className={styles.input} type="password" name='password' onChange={handleChange} value={form.password} />
            <p className={styles.textErrors}>{errors.password}</p>
  
          </div>
          <div className={styles.divInput}>
            <label>Confirm Password</label>
            <input ref={refs.confirmPassword} className={styles.input} type="password" name='confirmPassword' onChange={handleChange} value={form.confirmPassword}/>
            <p className={styles.textErrors}>{errors.confirmPassword}</p>

            </div>
          <div className={styles.divInput}>
            <label>Tel</label>
            <input ref={refs.tel} className={styles.input} type="number" name='tel' onChange={handleChange} value={form.tel}/>
            <p className={styles.textErrors}>{errors.tel}</p>
  
          </div>
          <div className={styles.divInput}>
            <label>Age</label>
            <input ref={refs.age} className={styles.input} type="number" name='age' onChange={handleChange} value={form.age}/>
            <p className={styles.textErrors}>{errors.age}</p>
  
          </div>
          <div className={styles.divInput}>
            <label>Terms</label>
            <input ref={refs.terms} className={styles.input} type="checkbox" name='terms' onChange={handleChange} checked={form.terms}/>
            <p className={styles.textErrors}>{errors.terms}</p>
  
          </div>
          <button type='submit'>Login</button>
        </form>
      </>
    )
  }