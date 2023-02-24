import React from 'react'
import SearchBar from '../components/SearchBar'
import SliderFilms from '../components/SliderFilms'

const Home = () => {
    return (
        <div>
            <section className='home-search'>
                <h1>Bienvenue,</h1>
                <h2>Des millions de films et artistes ...</h2>
                <SearchBar />
            </section>
            <section className='film-slider'>
                <h3>Tendance</h3>
                <SliderFilms />
                <h1>SLIDER ACTEURS</h1>
            </section>
        </div>
    )
}

export default Home