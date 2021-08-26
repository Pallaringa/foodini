import React, {useState} from 'react'
import Header from './Header'
import data from '../../restaurantsInfo/UberEats/italianRestaurants.json'
import Tittle from './Tittle';
import Menu from './Menu';
import Reviews from './Reviews';

export default function Restaurant() {

    const [restaurantsData] = useState(data);

    return (
        <div className="bg-black h-screen">
            <Header data={restaurantsData}/>
            <Tittle data={restaurantsData}/>
            <Menu data={restaurantsData}/>
            <Reviews data={restaurantsData}/>
        </div>
    )
}
