import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./Components/Card";

const App = () => {

  const [image, setImage] = useState([]);
  const [index, setIndex] = useState(3);

  const display = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
    setImage(response.data);
  }

  useEffect(function () {
    display()
  }, [index])

  let printImage = <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">Loading...</h3>

  if (image.length > 0) {
    printImage = image.map(function (elem, idx) {
      return <div>
        <Card elem={elem} />
      </div>
    })
  }

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      <div className="flex flex-wrap gap-4 h-[90%]">
        {printImage}
      </div>
      <div className="flex justify-center items-center gap-6">
        <button className="bg-amber-600 text-black cursor-pointer active:scale-95  px-4 py-2 font-semibold rounded-xl"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
              setImage([])
            }
          }}>
          Prev</button>
          <h4>Page {index}</h4>
        <button className="bg-amber-600 text-black cursor-pointer active:scale-95  px-4 py-2 font-semibold rounded-xl"
          onClick={() => {
            setIndex(index + 1)
            setImage([])
          }}>
          Next</button>
      </div>
    </div>
  )
}

export default App
