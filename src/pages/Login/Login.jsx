import React, { useEffect, useState } from 'react'
import './Login.css'
import upbg from './img/sign-upbg.png'
import loginbg from './img/loginbg.png'
import { useNavigate } from 'react-router-dom'
function Login() {
  const [show, setShow] = useState(true)
  const [confirm, setConfirm] = useState(false)
  const [data, setData] = useState([])
  const navigate = useNavigate()

  function fnUp(e) {
    e.preventDefault()
    let info = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirm: e.target.confirm.value
    }

    if (info.password !== info.confirm) {
      setConfirm(true)
    } else {
      setConfirm(false)
      fetch(`https://65eb326743ce1641893373f6.mockapi.io/users`,
        {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(info)
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .then(() => {
          window.localStorage.setItem('token', 'abvgd')
          e.target.name.value = ''
          e.target.phone.value = ''
          e.target.email.value = ''
          e.target.password.value = ''
          e.target.confirm.value = ''
          navigate('/')
        })
    }
  }

  useEffect(() => {
    fetch(`https://65eb326743ce1641893373f6.mockapi.io/users`)
      .then((res) => res.json())
      .then((users) => setData(users))
  }, [])

  function fnIn(e) {
    e.preventDefault()
    let info = {
      email: e.target.email.value,
      password: e.target.password.value,
    }
    let findUser = data.find((item) => item.email == info.email && item.password == info.password)
    console.log(info);
    if (findUser) {
      window.localStorage.setItem('token', 'abvgd')
      navigate('/')
    } else {
      alert("User Not Found")
    }
  }


  return (
    <div className='login'>
      {
        show ?

          <div className="sign__up">
            <div className='signup__left'>
              <img src={upbg} alt="" />
            </div>
            <form onSubmit={fnUp} className='singup_right' action="#">
              <h1 className='signup__title'>Sign up</h1>
              <input className='input__value ' name='name' type="text" placeholder='First name' />
              <input className='input__value ' name='phone' type="text" placeholder='Phone' />
              <input className='input__value ' name='email' type="text" placeholder='Email' />
              <input className={confirm ? 'form__red' : 'input__value'} name='password' type="text" placeholder='Password' />
              <input className={confirm ? 'form__red' : 'input__value'} name='confirm' type="text" placeholder='Password Confirm' />
              <button type='submit' class='next__step'>Next step</button>
              <p className='signup__link'>Already have an account? <button onClick={() => setShow(false)}>Log in</button></p>
            </form>
          </div>

          :

          <div className="sign__up">
            <div className='signup__left'>
              <img src={loginbg} alt="" />
            </div>
            <form onSubmit={fnIn} className='singup_right' action="#">
              <h1 className='signup__title'>Log in</h1>
              <p className='signup__link'>Do not you have an account?  <button onClick={() => setShow(true)}>Sign up</button></p>
              <input className='input__value ' name='email' type="text" placeholder='Email' />
              <input className='input__value ' name='password' type="text" placeholder='Password' />
              <button type='submit' className='next__step'>Next step</button>
            </form>
          </div>
      }



    </div>
  )
}

export default Login