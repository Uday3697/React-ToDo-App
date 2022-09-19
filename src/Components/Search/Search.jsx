import React,{useContext} from 'react'
import { MdSearch } from 'react-icons/md'
import './Search.css'
import { GlobalContext } from '../../globalContext'
const Search = () => {
  const {
    searchText,
    addNote,
    deleteNote,
    setSearchText,
  }=useContext(GlobalContext);
  return (
    <div className="search">
        <MdSearch className='search-icons' size='1.3em'/>
        <input onChange={(event)=>setSearchText(event.target.value)} type="text" placeholder='Search here...' />

    </div>
  )
}
 
export default Search
