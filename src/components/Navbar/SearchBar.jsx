import {useState} from "react";
import { useNavigate } from "react-router-dom";
import {ReactComponent as SearchIcon} from "../../assets/Search.svg"

const SearchBar=()=>{

    const [searchParam,setSearchParam]=useState("");
    const navigate = useNavigate();
    const onSearchChangeHandler=(e)=>{
        setSearchParam(e.target.value)
          
    }

    const onClick=(e)=>{
            navigate(`/products/search?filter=${encodeURIComponent(searchParam)}`)
            setSearchParam("")
        }
    
    
    return(
     <div className='input-field search-bar'>
        <input placeholder='Search products' value={searchParam} onChange={onSearchChangeHandler}  onKeyUp={e=>{
                    if(e.key==="Enter" && searchParam.length > 2){
                            onClick()
        }}} required type='search' />
        {searchParam.length>2 && <SearchIcon width="20px" height="20px" className="search-bar-icon" onClick={onClick}/>}
      </div>
    )

}

export default SearchBar;