import { Link } from 'react-router-dom'
import './styles.css'

export default function Header() {
    return (
        <header className='cabecalho'>
            <h1>☺ Random Dog ☺</h1>
            <nav>
                <ol>
                    <Link to={"/"}>
                        <li>Home</li>
                    </Link>
                    <Link to={"/cachorros"}>
                        <li>Cachorros</li>
                    </Link>
                    <Link to={"/about"}>
                        <li>Sobre</li>
                    </Link>
                </ol>
            </nav>
        </header>
    )
}