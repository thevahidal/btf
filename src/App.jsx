import axios from 'axios'
import { useEffect, useState } from 'react'

import CarPost from './CarPost'

const GET_LIST_URL = "https://api-gw.karnameh.com/post-storage/car-posts/car-post-list/?&size=20&start=20&sort=newest"

function App() {
  const [posts, setPosts] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    getPosts()
  }, [])

  async function getPosts() {
    const response = await axios.get(GET_LIST_URL + "&search_query=" + searchText)
    setPosts(response.data.car_posts)
  }

  function handleInputChange(event) {
    setSearchText(event.target.value)
  }

  function doSearch() {
    getPosts()
  }

  return (
    <div>
      <div>
        <input
          placeholder='Search here...'
          style={{
            padding: "10px",
            fontSize: "30px",
            margin: "50px"
          }}
          onChange={handleInputChange}
        />
        <button
          onClick={doSearch}
        >Search!</button>
      </div>

      {
        posts.map((ad) => {
          return (
            <CarPost
              brandModel={ad.title}
              carPrice={ad.price}
              carImage={ad.image}
            />
          )
        })
      }
    </div>
  )
}

export default App
