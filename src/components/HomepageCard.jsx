import React from 'react'
import {Link} from 'react-router-dom'
const HomepageCard = (props) => {
  return (
    
    <div className='col-lg-3 text-center mt-3  poke-card'>
        <Link to={`/details/${props.name}`}><img src={props.image} className="pokemon-image" alt="graphic" /></Link>
        <div>
          <Link style={{"all":"unset"}} to={`/details/${props.name}`}>{props.name}</Link>
        </div>
    </div>
  )
}

export default HomepageCard
