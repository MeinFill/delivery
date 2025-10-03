import './Login.css'
import Button from '../button/Button'
import { Link } from 'react-router-dom';

function Login(){
    return (
        <form className='guest-form'>
            <h1 className='guest-title'>Вход</h1>
            <div>
                <p className='guest-par'>Ваш email</p>
                <input className='guest-input' placeholder='Email'></input>
            </div>
            <div>
                <p className='guest-par'>Ваш пароль</p>
                <input className='guest-input' placeholder='Пароль'></input>
            </div>
            <div className='low-bar'>
                <Link to='/menu'><Button className='guest-button'>ВОЙТИ</Button></Link>
                <div className='any-accaunt'>
                    <p>Нет аккаунта?</p>
                    <Button className='go-login-or-registr-button'><Link to='/registration'>Зарегистрироваться</Link></Button>
                </div>
            </div>
        </form>
    )
}

export default Login;