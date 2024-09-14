import { useEffect, useState } from 'react'
import './styles.css'
import Card from '../Card'

export default function Random() {
    const [ conteudo, setConteudo ] = useState(<>Carregando...</>)
    const [refreshKey, setRefreshKey] = useState(0)

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
    
    const handleRefresh = () => {
        setRefreshKey(prevKey => prevKey + 1)
    }

    useEffect(() => {
        async function getConteudo() {
            setConteudo(await buildCards())
        }

        getConteudo()
    }, [refreshKey])

    return (
        <>
        <div className='listapi'>
            { conteudo }
        </div>
        <div className='divButton'>
            <button id='btnRefresh' onClick={handleRefresh}>Novo Cachorro</button>
        </div>
        </>
    )    
}