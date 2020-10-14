import React, { Component } from 'react'
import "./Simpsons.css"
import {
    Card, CardImg,
    CardTitle, CardSubtitle
} from 'reactstrap';



const Simpsons = ({image, firstName, lastName}) => {
    return (
        <Card className="card">
            <CardImg src={image} alt={firstName} />
            <CardTitle>{firstName}</CardTitle>
            <CardSubtitle>{lastName}</CardSubtitle>
        </Card>
    );
};




export default Simpsons