import { Link } from 'react-router-dom'
import './styles.css'

export default function Header() {
    return (
        <header className='cabecalho'>
            <h1>Cachorros ☺</h1>
            <nav>
                <ol>
                    <Link to={"/"}>
                        <li>Home</li>
                    </Link>
                </ol>
            </nav>
        </header>
    )
}