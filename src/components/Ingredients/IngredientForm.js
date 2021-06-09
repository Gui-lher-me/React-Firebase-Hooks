import React from 'react';
import Card from '../UI/Card';
import './IngredientForm.css';
import LoadingIndicator from "../UI/LoadingIndicator"

const IngredientForm = React.memo(({onAddIngredient, loading}) => {
  const [state, setState] = React.useState({title: "", amount: ""})

  const submitHandler = event => {
    event.preventDefault();
    onAddIngredient({
      title: state.title,
      amount: state.amount,
    })
    setState({title: "", amount: ""})
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" onChange={e => setState(
              prev => ({...prev, title: e.target.value})
            )} value={state.title} />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" onChange={e => setState(
              prev => ({...prev, amount: e.target.value})
            )} value={state.amount} />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {loading && <LoadingIndicator/>}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
