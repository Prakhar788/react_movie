// import React from 'react'
// import { useGlobalHook } from './context'
// import {NavLink} from "react-router-dom";
// import "./Movies.css"

// const Movies = () => {
//   const {movie,isLoading}=useGlobalHook();
//   if(isLoading){
//     return(
//       <>
//       <div>
//         Loading..
//       </div>
//       </>
//     )
//   }
//   return (
    
//     <section className='outer-container'>

//       <div className='container' >
//       {movie.map((curr)=>{
//         const {imdbID,Title,Poster}=curr;
//         const newName=Title.substring(0,15);
//      return (
     
//       <NavLink to={`movie/${imdbID}`}>
//       <div className='card'>
//         <h1>{newName.length >=15?`${newName}...`:newName}</h1>
//         <img src={Poster}/>



//       </div>
//       </NavLink>
//      );
//       })}
//       </div>
//     </section>
//   )
// }

// export default Movies

import React, { useContext } from 'react'
import { useGlobalHook } from './context'
import { NavLink } from 'react-router-dom'

const Movies = () => {
  const {movie, isLoading} = useGlobalHook();

  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }
  return (
    <>
    
    <section className='movie-page'>
      <div className='container grid grid-4-col'>
        {
        movie.map((curMovie)=>{
          const {imdbID, Title, Poster} = curMovie
          return(
            
          <NavLink to = {`movie/${imdbID}`} key = {imdbID}>
             <div className='card'>
               <div className='card-info'>
                 <h2>{Title}</h2>
                 <img src={Poster} alt = {imdbID}/>
               </div>
             </div>
          </NavLink>
  
          )
        })
        }
      </div>
    </section>
    </>
  )

  
    
}

export default Movies