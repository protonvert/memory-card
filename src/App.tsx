import { useEffect, useState } from "react"
import "./App.css"
import Card from "./Card"

const url = "https://api.disneyapi.dev/character"

function App() {
  const [score, setScore] = useState(0)
  const [data, setData] = useState("")

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

  return (
    <>
      <Card data={data} id={10} />
      <Card data={data} id={15} />
      <Card data={data} id={49} />
    </>
  )
}

export default App
