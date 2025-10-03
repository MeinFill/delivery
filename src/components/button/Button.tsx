import './Button.css';
import type { ButtonInterface } from './ButtonInterface';
import cn from 'classnames';

function Button({children, className, ...props}: ButtonInterface){
    return (
        <button className={cn('button', className)} {...props}>{children}</button>
    )
}

export default Button;