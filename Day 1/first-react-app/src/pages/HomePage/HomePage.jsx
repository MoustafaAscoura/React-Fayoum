import { useState } from 'react'
import Card from '../../components/Card/Card'
import CardClass from '../../components/Card/CardClass'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './HomePage.css'

const HomePage = () => {
    const [cards, setCards] = useState([0,1,2])

    const shuffleCards = () => {
        const new_cards_numbers = cards.map(num => num + 1)
        setCards(new_cards_numbers)
    }

    return (
        <>
            <Header/>
            <div className='px-5'>
                <h1 className='p-3'>Homepage 1</h1>
                <div className="d-flex justify-between gap-2">
                    <Card title="First Card" number={cards[0]} onClickButton={shuffleCards}/>
                    <Card title="Second Card" number={cards[1]} onClickButton={shuffleCards}/>
                    <Card title="Third Card" number={cards[2]} onClickButton={shuffleCards}/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default HomePage