import { Link } from 'react-router-dom'
import './styles.css'

export default function Header() {
    return (
        <header className='cabecalho'>
            <div className='company'>
                <img src="./src/assets/doge-coin.png" alt="doge coin" />
                <h1>DOG COMPANY</h1>
                <img src="./src/assets/doge-coin.png" alt="doge coin" />
            </div>
            <nav>
                <ol>
                    <Link to={"/"}>
                        <li>HOME</li>
                    </Link>
                    <Link to={"/cachorros"}>
                        <li>CACHORROS</li>
                    </Link>
                    <Link to={"/about"}>
                        <li>SOBRE</li>
                    </Link>
                </ol>
            </nav>
        </header>
    )
}