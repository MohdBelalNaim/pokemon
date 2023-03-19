import React, { useEffect, useState } from 'react'
import '../assets/home.css'
import logo from '../assets/images/logo.png'
import {useParams} from 'react-router-dom'
const Home = () => {
    const{id} = useParams()
    const[pokemon,setpokemon] = useState({})
    const[image,setImage] = useState("")
    const[stats,setStats]=useState([])
    const[loading,setLoading]=useState(false)
    useEffect(()=>{
        async function getData(){
            await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res=>res.json())
            .then(data=>{
                setpokemon(data)
                setImage(data.sprites.other.dream_world.front_default)
                setStats(data.stats)
            })
        }
        getData()
        
    },[])
    console.log(pokemon)
    console.log(stats)
    return (
        <div className='main-wrapper'>
          <div className='main-container-second px-3 py-3'>
            <div><img src={logo} alt="Pokemon" className='img-fluid pokemon-logo'/></div>
            {
                loading?
                <div class="d-flex justify-content-center py-4">
                    <div class="spinner-border" role="status">
                      <span class="sr-only"></span>
                    </div>
                </div>
                :
                <div className="row">
            
                <div className="col-lg-6 text-center py-5">
                    <img src={image} alt={pokemon.name} className="img-fluid details-image" />
                </div>
                <div className="col-lg-6 details-title">
                    <div><h3>{pokemon.name}</h3></div>
                    <div>Base Expirience : {pokemon.base_experience}</div>
                    <div className='mt-3'>
                        {stats.map(item=>{
                            return(
                                <>
                                <div>{item.stat.name} : {item.base_stat}</div>
                                <div className="outer">
                                    <div className="inner" style={{"width":item.base_stat+"%"}}></div>
                                </div>
                                </>
                            )
                        })}
                    </div>
                </div>
                
                
            </div>
            }
            
          </div>
        </div>
  )
}

export default Home
