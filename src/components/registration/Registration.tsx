import './Registratiom.css'
import Button from '../button/Button'
import { Link } from 'react-router-dom';

function Registration(){
    return (
        <form className='guest-form'>
            <h1 className='guest-title'>Регистрация</h1>
            <div>
                <p className='guest-par'>Ваш email</p>
                <input className='guest-input' placeholder='Email'></input>
            </div>
            <div>
                <p className='guest-par'>Ваш пароль</p>
                <input className='guest-input' placeholder='Пароль'></input>
            </div>
            <div>
                <p className='guest-par'>Ваше имя</p>
                <input className='guest-input' placeholder='Имя'></input>
            </div>                
            <div className='low-bar'>
                <Link to='/menu'><Button className='guest-button'>ЗАРЕГИСТРИРОВАТЬСЯ</Button></Link>
                <div className='any-accaunt'>
                    <p>Есть аккаунт?</p>
                    <Button className='go-login-or-registr-button'><Link to='/login'>Войти</Link></Button>                    
                </div>
            </div>
        </form>
    )
}

export default Registration;