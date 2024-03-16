import "./TodoSearch.css"
function TodoSearch () {
    return (
      <input 
        className="TodoSearch" 
        placeholder="buscar"
        onChange={(event)=> {
          console.log('busco');
          console.log(event.target.value);
        }}
        
      />
    )
  }


export {TodoSearch};