// import React from 'react'
// import { useGlobalHook } from './context'


// const Search = () => {
//   const {query,setQuery,isError}=useGlobalHook();
//   return (
//     <>
//     <h1>Search Your Movie</h1>
//     <form action='#' onClick={(e)=>{e.preventDefault()}}>

//     <input type='search' value={query} onChange={(e)=>setQuery(e.target.value)}></input>
//    <p> {isError.show && isError.msg} </p>
//     </form>
    
    
//     </>
//   )
// }

// export default Search

import React, { useContext } from 'react'
import { useGlobalHook } from './context'


const Search = () => {
  const {query, setQuery, isError} = useGlobalHook();
  return (
    <section className='search-section'>
      <h2>Search for a movie</h2>
      <form action='#' onSubmit={(e)=>e.preventDefault}>
        <div>
          <input type='text' placeholder='search ' value={query} onChange={(e)=>setQuery(e.target.value)}/>
        </div>
      </form>
      <div className='card-error'>
        <p>{isError.show && isError.msg}</p>
      </div>
    </section>
  )
}

export default Search