import React from 'react'
import { useGlobalHook } from './context'
import Movies from './Movies'
import Search from './Search'

const Home = () => {
    //const name=useGlobalHook();
  return (
    
    <div>
    {/* hello {name} */}
    <Search/>
    <Movies/>
    </div>
  )
}

export default Home