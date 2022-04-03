import {useState} from "react";
import { useNavigate } from "react-router-dom";

const SearchBar=()=>{

    const [searchParam,setSearchParam]=useState("");
    const navigate = useNavigate();
    const onSearchChangeHandler=(e)=>{
        setSearchParam(e.target.value)
          
    }

    const onEnter=(e)=>{
        if(e.key==="Enter" && searchParam.length > 2){
      
            navigate(`/products/search?filter=${encodeURIComponent(searchParam)}`)
            setSearchParam("")
        }
    }
    
    return(
     <div className='input-field search-bar'>
        <input placeholder='Search products' value={searchParam} onChange={onSearchChangeHandler}  onKeyUp={onEnter} required type='search' />
      </div>
    )

}

export default SearchBar;