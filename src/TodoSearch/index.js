import React from 'react';
import "./TodoSearch.css";


function TodoSearch ({searchValue, setSearchValue}) {



    return (
      <input 
        className="TodoSearch" 
        placeholder="buscar"
        value={searchValue}
        onChange={(event)=> {
          console.log('busco');
          setSearchValue(event.target.value)
          console.log('despued',event.target.value);
        }}
        
      />
    )
  }


export {TodoSearch};