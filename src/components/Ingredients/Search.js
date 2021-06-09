import React from 'react';
import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(({onLoadIngredients}) => {
  const [enteredFilter, setEnteredFilter] = React.useState("")
  const inputRef = React.useRef()

  React.useEffect(() => {
    const timer = setTimeout( () => {
      if(enteredFilter === inputRef.current.value) {
        const query = enteredFilter.length === 0 ? "" : `?orderBy="title"&equalTo="${enteredFilter}"`
        fetch(`https://react-http-91e3b-default-rtdb.firebaseio.com/ingredients.json` + query)
        .then(response => {
          
          return response.json()
        })
        .then(data => {
          const loadedData = []
          for(const key in data) {
            loadedData.push({
              title: data[key].title,
              amount: data[key].amount,
              id: key,
            })
          }
          onLoadIngredients(loadedData)
        })
      }
      
    }, 500 )
    return () => clearTimeout(timer)
  }, [enteredFilter, onLoadIngredients, inputRef])

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input ref={inputRef} type="text" value={enteredFilter} onChange={(e) => {setEnteredFilter(e.target.value)}}/>
        </div>
      </Card>
    </section>
  );
});

export default Search;

