import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import api from '../api';

const VisualizaNoticia = () => {

    const { id } = useParams()
    const [noticia, setNoticia] = useState({})
    
    useEffect(() => {
        api.get(`/noticias/${id}`)
        .then(response => setNoticia(response.data))
        .catch(error => console.error("Erro ao obter a noticia: ", error))
    }, [id])

  return (
    <Container className="py-4">
        <Card className="shadow-sm">
            <Card.Body>
                <Card.Title>{noticia.titulo}</Card.Title>
                <Card.Text>{noticia.texto}</Card.Text>
            </Card.Body>

        </Card>

    </Container>
  )
}

export default VisualizaNoticia