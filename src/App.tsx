import { useEffect, useState } from "react";
import "./App.css";

function App() {

  console.log(import.meta.env.VITE_ACCESS_KEY)
  const baseURL = `https://api.unsplash.com/collections/1801631/photos?client_id=${import.meta.env.VITE_ACCESS_KEY}`

  const [photo, setPhoto] = useState('')

  useEffect(() => {
    const fetchphotos = async () => {
      const response = await fetch(baseURL)

      const data = await response.json()
      console.log(data[2].urls.regular)
      setPhoto(data[2].urls.regular)

    }
    fetchphotos()
  }, [])



  return (
    <>
      <img src={photo} onPointerOver={() => {
        setPhoto('')
      }} />
    </>
  );
}

export default App;
