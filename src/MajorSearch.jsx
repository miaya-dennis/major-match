import { useState } from 'react'
import './SearchCard.css'



const Major = [
  /*{ id: "1", Name: "Petroleum Engineering" },
  { id: "2", Name: "Mining And Mineral Engineering" },
  { id: "3", Name: "Metallurgical Engineering" },
  { id: "34", Name: "Nursing" },
  { id: "37", Name: "Business Economics" },
  { id: "72", Name: "Physical Science" }*/
]

function MajorSearch(major) {
const [query, setQuery] = useState("")

return (
  <div>
      <h1>Find Your Major</h1>
      <input type="text" id="query" />
      <button>Search</button>
      {Major.map((MajorSearch) => <p key={MajorSearch.id} className="card">{MajorSearch.Name}</p>)}
    </div>
  )
}
 export default MajorSearch