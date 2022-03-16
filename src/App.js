import React, { useState } from "react"

import Header from "./components/Header"
import TattooItem from "./components/TattooItem"
import TattooPost from "./components/TattooPost"
import Search from "./components/Search"

import tattoos from "./data/tattoos"

import './App.css'

const App = () => {
  const [selectedTattoo, setSelectedTattoo] = useState(null);
  const [searchText, setSearchText] = useState("")

  const onTattooOpenClick = (clickedTattoo) => {
    setSelectedTattoo(clickedTattoo)
  }

  const onTattooCloseClick = () => {
    setSelectedTattoo(null)
  }



  const tattooElements = tattoos.filter((tattoo) => {
    return tattoo.description.includes(searchText)
  }).map((tattoo, index) => {
    return <TattooItem key={index} tattoo={tattoo} onTattooClick={onTattooOpenClick} />
  })

  let tattooPost = null;
  if (selectedTattoo) {
    tattooPost = <TattooPost tattoo={selectedTattoo} onBgClick={onTattooCloseClick} />
  }
  return (
    <main>
      <Header />
      <section className="app-section">
        <div className="app-container">
          <Search value={searchText} onValueChange={setSearchText} />
          <div className="app-grid">
            {tattooElements}
          </div>
        </div>
      </section>
      {tattooPost}
    </main>
  )
}

export default App;
