import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import birdImage from "../../assets/images/bird.webp"

class CardClass extends React.Component {
    constructor () {
        super()
    }

    componentDidMount () {
    }

    componentDidUpdate () {
    }

    componentWillUnmount () {
    }

    render () {
        return (<Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={birdImage} />
        <Card.Body>
          <Card.Title>Card From Class Component</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>)
    };
}

export default CardClass