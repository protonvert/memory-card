import { useEffect, useState } from "react"

export default function Card({ data, id }) {
  const character = Array.from(data).find((elem) => elem._id === id)
  const [name, setName] = useState("")
  const [image, setImage] = useState("")

  useEffect(() => {
    const setEvent = async () => {
      if (character !== undefined) {
        setName(character.name)
        setImage(character.imageUrl)
        console.log(character)
      }
    }
    setEvent()
  }, [data])

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
      </div>
    </div>
  )
}
