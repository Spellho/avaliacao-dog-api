import { useEffect, useState } from 'react'
import './styles.css'
import Card from '../../components/Card'

export default function Random() {
    const [ conteudo, setConteudo ] = useState(<>Carregando...</>)

    async function getDogs() {
        const reqOptions = {
            method: "GET",
            redirect: "follow"
        }

        const response = await fetch(
            "https://api.thedogapi.com/v1/images/search",
            reqOptions
        )

        if(!response.ok){
            throw new Error("Http ERROR")
        }

        const apiResponse = await response.json()

        return apiResponse
    }

    async function buildCards() {
        const consulta = await getDogs()

        return consulta.map(cachorro => <Card data={cachorro} key={cachorro.id}/>)
    }
    
    useEffect(() => {
        async function getConteudo() {
            setConteudo(await buildCards())
        }

        getConteudo()
    }, [])

    return (
        <div className='listapi'>
            { conteudo }
        </div>
    )    
}