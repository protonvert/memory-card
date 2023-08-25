import { useEffect, useState } from "react"
import "./App.css"
import Card from "./components/Card"
import Header from "./components/Header"

const url = "https://api.disneyapi.dev/character"

function App() {
  const [score, setScore] = useState(0)
  const [data, setData] = useState("")
  const [characterIDs, setCharacterIDs] = useState([
    7, 10, 11, 22, 13, 14, 15, 16, 17, 20,
  ])
  const [rounds, setRounds] = useState(0)

  // Establish connection to API and recieve neccessary data
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url)
      const characters = await response.json()
      const { data } = characters
      setData(data)
    }
    getData()
  }, [])

  const scrambleCards = () => {
    const array = [...characterIDs]
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    setCharacterIDs([...array])
  }

  const increaseScore = () => {
    setScore(score + 1)
  }

  const gameReset = () => {
    setCharacterIDs([...characterIDs])
    setScore(0)
    setRounds(rounds + 1)
  }

  return (
    <>
      <Header score={score} />
      <div className="grid container xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-20 mx-auto">
        {characterIDs.map((id) => {
          return (
            <Card
              data={data}
              id={id}
              increaseScore={increaseScore}
              scrambleCards={scrambleCards}
              gameReset={gameReset}
              rounds={rounds}
              key={id}
            />
          )
        })}
      </div>
    </>
  )
}

export default App
