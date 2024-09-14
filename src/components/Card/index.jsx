import './styles.css'

export default function Card({ data: cachorro }) {
    return (
        <>
            <img id='randdog' src={cachorro.url} alt="" />
        </>
    )
}