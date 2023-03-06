import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { itemService } from "../../services/items"
import { Item } from "../ItemCard"
import React, { useContext } from "react";

const Empanadas = () => {
    const [items, setItems] = useState([])
    const navigate = useNavigate()

    const { empanadas } = useParams()

    useEffect(() => {
        itemService.getAll("empanadas").then((data) => setItems(data))
    }, [])

    return (
        <>
            <Container>
                <Row md={3} >
                    {
                        items.map((product, idx) => {
                            return <Item key={product.id} {...product} />;
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

const Pizzas = () => {

    const [items, setItems] = useState([])
    const navigate = useNavigate()

    const { pizzas } = useParams()

    useEffect(() => {
        itemService.getAll("pizzas").then((data) => setItems(data))
    }, [])

    return (
        <>
            <Container>
                <Row md={3} >
                    {
                        items.map((product, idx) => {
                            return <Item key={product.id} {...product} />;
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

const Plato = () => {

    const [items, setItems] = useState([])
    const navigate = useNavigate()

    const { plato } = useParams()

    useEffect(() => {
        itemService.getAll("plato").then((data) => setItems(data))
    }, [])

    return (
        <>
            <Container>
                <Row md={3} >
                    {
                        items.map((product, idx) => {
                            return <Item key={product.id} {...product} />;
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

const Postres = () => {

    const [items, setItems] = useState([])
    const navigate = useNavigate()

    const { postres } = useParams()

    useEffect(() => {
        itemService.getAll("postres").then((data) => setItems(data))
    }, [])

    return (
        <>
            <Container>
                <Row md={3} >
                    {
                        items.map((product, idx) => {
                            return <Item key={product.id} {...product} />;
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

const Sandwich = () => {

    const [items, setItems] = useState([])
    const navigate = useNavigate()

    const { sandwichs } = useParams()

    useEffect(() => {
        itemService.getAll("sandwichs").then((data) => setItems(data))
    }, [])

    return (
        <>
            <Container>
                <Row md={3} >
                    {
                        items.map((product, idx) => {
                            return <Item key={product.id} {...product} />;
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export { Empanadas, Pizzas, Plato, Postres, Sandwich }