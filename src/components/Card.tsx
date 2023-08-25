import { ReactNode, useEffect, useState } from "react"



export default function Card({ data, id, increaseScore, scrambleCards, gameReset, rounds }) {
  const [name, setName] = useState("")
  const [clicks, setClicks] = useState(0)
  const [image, setImage] = useState("")


  const handleClick = () => {
    if (clicks === 0) {
      setClicks(clicks + 1)
      scrambleCards()
      increaseScore()
    }

    else {
      scrambleCards()
      setClicks(clicks + 1)
    }
  }

  if (clicks > 1) {
    gameReset()
  }


  useEffect(() => {
    const character = Array.from(data).find((elem) => elem._id === id)
    const setCardInfo = async () => {
      if (character !== undefined) {
        setName(character.name)
        setImage(character.imageUrl)
      }
    }
    setCardInfo()

  }, [data, id])

  useEffect(() => {
    setClicks(0)
  }, [rounds])

  return (
    <div className="card w-96 bg-base-200 shadow-xl min-h-[300px] items-center justify-items-center text-center"
      onClick={handleClick}
    >
      <figure className="px-10 pt-10">
        <img src={image} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
      </div>
    </div>
  )
}
