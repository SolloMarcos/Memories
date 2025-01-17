import axios from "../Axios.config"

import { useState, useEffect } from "react"

import { Link } from "react-router-dom"

import "./Home.css"

const home = () => {
  const [memories, setMemories] = useState([])

  useEffect(() => {
    const getMemories = async () => {
      const res = await axios.get("/memories")

      setMemories(res.data);
    }

    getMemories()
  }, [])

  return (
    <div className="home">

      <h2>Confira as ultimas memorias</h2>
      <div className="memories-container">

        {memories.length > 0 && memories.map((memory) =>
          <div className="memory" key={memory._id}>
            <img src={`${axios.defaults.baseURL}${memory.src}`} alt={memory.title} />
            <p>{memory.title}</p>
            <Link className="btn" to={`/memories/${memory._id}`}>
              comentar
            </Link>
          </div>
        )}
      </div>
    </div >
  )
}

export default home