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
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-2 pt-2">
          <img src={photo} alt="landmark" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Boat Dock</h2>
        </div>
      </div>
    </>
  );
}

export default App;
