import React, { useEffect, useState } from "react"

import "./App.css"
import { artStyle, randomBgs, formatToReadable } from "./helpers"
import DiggingArea from "./components/DiggingArea"
import { rowCount } from "./Game/Gameboard"
import Game from "./Game/Game"

// components
import CoinMineSlider from "./components/CoinMineSlider"
import Axes from "./components/Axes.jsx/index.jsx"
import Miners from "./components/Miners"
import CoinMinePerSecond from "./components/CoinMinePerSecond"

const game = new Game()
game.startNewGame()

function App() {
  const [cells, setCells] = useState([])
  const [coinMultiplierValue, setCoinMultiplierValue] = useState(1)
  const [minePerSecond, setMinePerSecond] = useState(0.1)
  const [coins, setCoins] = useState(0)
  const [coinPerSecond, setCoinPerSecond] = useState(0.1)
  const [miners, setMiners] = useState(game.miners)
  const [selectedMinerId, setSelectedMinerIdx] = useState(0)

  // syncronize game and ui in useEffect
  useEffect(() => {
    setCells(game.undugs.slice(0))
    game.cellsStateSetter = setCells
    setInterval(() => {
      game.playOneTurn()
      const cells = game.undugs.slice(0)
      setCells(cells)
      setMinePerSecond(formatToReadable(game.minePerSecond, 2))
      setCoins(game.coins.toFixed(1))
      setCoinPerSecond(formatToReadable(game.coinPerSecond, 2))
    }, 1000)
  }, [])

  // EVENT LISTENER CALLBACKS 
  const handleOnChange = (event) => {
    const newSliderFactor = event.target.value
    // const formattedValue = newSliderFactor.toFixed(2)
    setCoinMultiplierValue(newSliderFactor)
    game.slider = newSliderFactor
    // console.log(formatToReadable(game.slider))
  }

  const handleBuyAxe = (axeType) => {
    console.log(axeType)
    game.buyAxe(axeType, selectedMinerId)
    // set state to sync ui to game state

    //
  }

  const handleHire = () => {
    game.buyMiner()
    //  setState, do smt
    const minersClone = game.miners.slice(0)
    setMiners(minersClone)
  }

  const handleMinerSelect = (id) => {
    console.log(id)
    setSelectedMinerIdx(id)
  }

  const handleLevelUp = (type, id) => {
    switch (type) {
      case "general":
        game.levelUp(id)
        break
      case "agi":
        game.levelUpAgi(id)
        break
      case "str":
        game.levelUpStr(id)
        break
      case "int":
        game.levelUpInt(id)
        break
      default:
        console.log("handle error")
    }
  }
  return (
    <div className="main-container flex-wrapper">
      {/* ART */}
      <div className="art" style={artStyle}>
        <div
          className="dig-area-container"
          style={{
            gridTemplateColumns: `repeat(${rowCount}, 1fr)`,
            gridTemplateRows: `repeat(${rowCount}, 1fr)`,
          }}
        >
          {/* Cells */}
          {cells.map((cell, idx) => {
            return (
              <DiggingArea
                key={idx}
                digLeft={cell.undug}
                index={idx}
                isActive={cell.isActive}
                backgroundColor={randomBgs[idx]}
              />
            )
          })}
        </div>
      </div>

      {/* INTERACTIVE CONTROLS SECTION */}
      <div className="controls flex-wrapper">
        {/* Main Informations */}
        <CoinMineSlider
          onChangeHandler={handleOnChange}
          coinMultiplier={coinMultiplierValue}
        />
        {/* Buy Axe Section */}
        <Axes buyAxeHandler={handleBuyAxe} />

        {/* Money and Mine Per Second */}
        <CoinMinePerSecond
          minePerSecond={minePerSecond}
          coinPerSecond={coinPerSecond}
          coins={coins}
        />

        {/* Miners & Upgrade Area */}
        <Miners
          miners={miners}
          hireHandler={handleHire}
          selectMinerHandler={handleMinerSelect}
          selectedMinerId={selectedMinerId}
          levelUpHandler={handleLevelUp}
        />
      </div>
    </div>
  )
}

export default App
