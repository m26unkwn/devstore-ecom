import {useState} from "react";

const SearchBar=()=>{

    const [searchParam,setSearchParam]=useState("");
 
    const onSearchChangeHandler=(e)=>{
        setSearchParam(e.target.value)
          
    }
   

    return(
     <div className='input-field search-bar'>
        <input placeholder='Search products' value={searchParam} onChange={onSearchChangeHandler} required type='search' />
      </div>
    )

}

export default SearchBar;