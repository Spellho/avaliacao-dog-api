import './styles.css'

export default function Card({ data: cachorro }) {
    return (
        <>
            <img src={cachorro.url} alt="" />
        </>
    )
}