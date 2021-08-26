import React, { useState } from 'react'
import SearchBox from './Header/SearchBox';
import SearchRestaurant from './Main/SearchRestaurant';
import uberEats from '../../restaurantsInfo/UberEats/italianRestaurants.json'
import NavBar from './NavBar/NavBar'

function Home() {
  const [restaurantsData] = useState(uberEats);
  const [filteredData, setFilteredData] = useState([])
  const [searchText, setSearchText] = useState('')
  const [avatar, setAvatar] = useState(true)

  //muestra/oculta la foto de perfil cuando se da click en el menu
  const handleHideSearchBox = () => {
    setAvatar(!avatar)
  }

  // muestra la informacion dependiendo de lo que este en el input
  const handleFilter = (e) => {
    const searchWord = e.target.value
    setSearchText(searchWord)
    if(searchWord!==""){
      const newFilter = restaurantsData.filter((value) => {
        return (
          value.data.title.toLowerCase().includes(searchWord.toLowerCase())
      )})
      setFilteredData(newFilter)
    }else
    setFilteredData([])
  }

  //limpia input de busqueda
  const clearSearch = () => {
    setFilteredData([])
    setSearchText("")
  }

  return (
    <div className="bg-black h-screen">
        <NavBar onMenuClick={handleHideSearchBox} avatarValue={avatar}/>
        {avatar && 
        <SearchBox onSearch={handleFilter} clear={clearSearch} searchText={searchText}/>
        }
        <SearchRestaurant data={filteredData}/>
    </div>
    )
}

export default Home
