import React, { useEffect, useState } from 'react'
import '../assets/home.css'
import logo from '../assets/images/logo.png'
import HomepageCard from '../components/HomepageCard'
const Home = () => {

    const[allPokemons,setAllPokemons] = useState([])
    const[loadMore,setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
    const[loading,setLoading]=useState(false)

    const getAllPokemons = async() =>{
        setLoading(true)
        const res = await fetch(loadMore)
        const data = await res.json()

        setLoadMore(data.next)

        function createPokemonObject(result){
            result.forEach(async(pokemon)=>{
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const resdata = await res.json()
                console.log(resdata)
                setAllPokemons(currentList=>[...currentList,resdata])
                setLoading(false)
            })
        }
       
        createPokemonObject(data.results)  
        
    }
    useEffect(()=>{
        getAllPokemons()
    },[])
    return (
        <div className='main-wrapper'>
          <div className='main-container px-3 py-3'>
            <>
            <div><img src={logo} alt="Pokemon" className='img-fluid pokemon-logo'/></div>
            {
                loading?
                <div class="d-flex justify-content-center py-4">
                    <div class="spinner-border" role="status">
                      <span class="sr-only"></span>
                    </div>
                </div>:
                <>
                <div className='row px-3'>
                    {
                        allPokemons.map(item=>{
                            return(
                                <HomepageCard 
                                    id={item.id} 
                                    name={item.name} 
                                    image={item.sprites.other.dream_world.front_default} 
                                    key={item.id}
                                />
                            )
                        })
                    }
                </div>
                <div className='text-center'>
                    <button className='btn btn-dark mt-3' onClick={()=>getAllPokemons()}>Load more</button>
                </div>
                </>
            }
            </>
          </div>
        </div>
  )
}

export default Home
