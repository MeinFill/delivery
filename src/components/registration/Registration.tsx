import type { FormEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import type { AppDispatch, RootState } from "../../store/Store"
import { registration, userActions } from "../../store/UserSlice"
import Button from "../button/Button"
import "./Registration.css"

export type RegistrationForm = {
  email: {
    value: string
  }
  name: {
    value: string
  }
  password: {
    value: string
  }
}

function Registration() {
  const dispatch = useDispatch<AppDispatch>()
  const { loginStateError } = useSelector((S: RootState) => S.user)

  const sendRegistration = async (email: string, name: string, password: string) => {
    await dispatch(registration({ email, name, password }))
  }

  const submit = async (e: FormEvent) => {
    dispatch(userActions.reSubmit())
    e.preventDefault()
    const target = e.target as typeof e.target & RegistrationForm
    const email = target.email.value
    const name = target.name.value
    const password = target.password.value
    await sendRegistration(email, name, password)
  }

  return (
    <form className="guest-form" onSubmit={submit}>
      <h1 className="guest-title">Регистрация</h1>
      {loginStateError && <div>{loginStateError}</div>}
      <div>
        <p className="guest-par">Ваш email</p>
        <input className="guest-input" name="email" placeholder="Email"></input>
      </div>
      <div>
        <p className="guest-par">Ваш пароль</p>
        <input className="guest-input" name="password" placeholder="Пароль"></input>
      </div>
      <div>
        <p className="guest-par">Ваше имя</p>
        <input className="guest-input" name="name" placeholder="Имя"></input>
      </div>
      <div className="low-bar">
        <Button className="guest-button">ЗАРЕГИСТРИРОВАТЬСЯ</Button>
        <div className="any-accaunt">
          <p>Есть аккаунт?</p>
          <Button className="go-login-or-registr-button">
            <Link to="/login">Войти</Link>
          </Button>
        </div>
      </div>
    </form>
  )
}

export default Registration
