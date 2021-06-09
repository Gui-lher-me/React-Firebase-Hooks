import React from 'react';
import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from "./IngredientList"
import ErrorModal from "../UI/ErrorModal"

function Ingredients() {
  const [ingredients, setIngredients] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  const addIngredientHandler = ingredient => {
    setIsLoading(true)
    fetch('https://react-http-91e3b-default-rtdb.firebaseio.com/ingredients.json', {
      method: "POST",
      body: JSON.stringify(ingredient),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        setIsLoading(false)
        return response.json()
      })
      .then(data => {
        console.log(data)
        setIngredients(prev => [...prev, {id: data.name, ...ingredient}])
      })
    
  }

  const removeIngredientHandler = id => {
    setIsLoading(true)
    fetch(`https://react-http-91e3b-default-rtdb.firebaseio.com/ingredients/${id}.json`, {
      method: "DELETE",
      
    })
      .then(() => {
        
        setIsLoading(false)
        setIngredients(prev => prev
          .filter(ingredient => ingredient.id !== id))
      })
      .catch(e => setError("Something went wrong!"))
    
  }

  const filteredIngredientsHandler = React.useCallback(filteredIngredients => {
    
    setIngredients(filteredIngredients)
  }, [])

  const clearError = () => {
    setError(null)
    setIsLoading(false)
  }

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm loading={isLoading} onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList onRemoveItem={removeIngredientHandler} ingredients={ingredients} />
      </section>
    </div>
  );
}

export default Ingredients;

