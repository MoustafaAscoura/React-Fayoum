import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import birdImage from "../../assets/images/bird.webp"
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

function BasicExample(props) {
    const {title:title_from_props, number: card_number, onClickButton} = props

    const [title, setTitle] = useState(title_from_props)

    const imgRef = useRef()

    const title_length = title.length

    useEffect(()=>{
        console.log("Component Rendered / Updated")
        console.log("Image source:", imgRef.current?.dataset.value)
        return console.log("When component get unmounted")
    }, [])

    const title_length_memoized = useMemo(()=>{
        return title.length
    }, [title])

    // useCallback() - Day 03

    const changeTitle = () => {
        setTitle("Card number")
    }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={birdImage} ref={imgRef} data-value="3" />
      <Card.Body>
        <Card.Title>Card Number: {card_number}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <br/>
          Title Length: {title_length}
          <br/>
          Title Length Memoized: {title_length_memoized}
          <br/>
          Original Title was: {title_from_props}
        </Card.Text>
        <Button variant="primary" onClick={(e)=>onClickButton()}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;