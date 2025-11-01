import { type FormEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import type { AppDispatch, RootState } from "../../store/Store"
import { login, userActions } from "../../store/UserSlice"
import Button from "../button/Button"
import "./Login.css"

export type LoginForm = {
  email: {
    value: string
  }
  password: {
    value: string
  }
}

function Login() {
  const dispatch = useDispatch<AppDispatch>()
  const { loginStateError } = useSelector((S: RootState) => S.user)

  const sendLogin = async (email: string, password: string) => {
    await dispatch(login({ email, password }))
  }

  const submit = async (e: FormEvent) => {
    dispatch(userActions.reSubmit())
    e.preventDefault()
    const target = e.target as typeof e.target & LoginForm
    const email = target.email.value
    const password = target.password.value
    await sendLogin(email, password)
  }

  return (
    <form className="guest-form" onSubmit={submit}>
      <h1 className="guest-title">Вход</h1>
      {loginStateError && <div>{loginStateError}</div>}
      <div>
        <p className="guest-par">Ваш email</p>
        <input className="guest-input" name="email" placeholder="Email"></input>
      </div>
      <div>
        <p className="guest-par">Ваш пароль</p>
        <input className="guest-input" name="password" placeholder="Пароль"></input>
      </div>
      <div className="low-bar">
        <Button className="guest-button">ВОЙТИ</Button>
        <div className="any-accaunt">
          <p>Нет аккаунта?</p>
          <button className="go-login-or-registr-button">
            <Link to="/registration">Зарегистрироваться</Link>
          </button>
        </div>
      </div>
    </form>
  )
}

export default Login
