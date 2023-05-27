import React,{useContext, useEffect, useState} from "react";
const AppContext=React.createContext();
export const API_URL=`http://www.omdbapi.com/?apikey=c6b08d93`;
export const AppProvider=({children})=>{

const[isLoading,setIsLoading]=useState(true);
const [movie,setMovie]=useState([]);
const [isError,setIsError]=useState({show:"false",msg:""});
const [query,setQuery]=useState("titanic")



const getMovies=async(url)=>{
   
  try{
  const res=await fetch(url);
  const data=await res.json();
  console.log(data);
  if(data.Response==='True'){
    setIsLoading(false);
    setIsError({
      show:false,
      msg:"",
    })
    setMovie(data.Search);
  }
  else{
   setIsError({show:"true",msg:data.Error}); 
  }
  } catch(error){
    console.log(error);
  }
}


useEffect(()=>{
  let timer = setTimeout(()=>{
    getMovies(`${API_URL}&s=${query}`);
  }, 500)
  return () => clearTimeout(timer)
},[query])


return <AppContext.Provider value={{isLoading,isError,movie,query,setQuery}}>{children}</AppContext.Provider>
}
export default AppProvider;


const useGlobalHook=()=>{
    return useContext(AppContext);
}
export {AppContext,useGlobalHook}