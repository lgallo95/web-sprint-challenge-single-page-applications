import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import PizzaForm from './Components/PizzaForm'
import axios from 'axios';

const initialFormValues = {
  name: '',
  size: '',
  Pepperoni: false,
  Cheese: false,
  special: '',
}

function App() {
  const [order, setOrder] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState("");

  const onUpdate = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const onSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.name.trim(),
      Pepperoni: formValues.Pepperoni,
      Cheese: formValues.Cheese,
      special: formValues.special.trim(),
    }

    if(newOrder.name.length <= 3) {
      setFormErrors("Name has to be longer than 3 characters ya chump!");
      return;
    }

    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        const dbOrder = res.data;
        setOrder([dbOrder, ...order]);
        setFormErrors("");
        setFormValues(initialFormValues);
      })
      .catch(err => console.error(err))
      setOrder(order.concat(newOrder));
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <nav>
        <Link to="/"> <button id="Home-Page">Home Page</button> </Link>
        <Link to="/pizza"> <button id="order-pizza">Order Pizza</button> </Link>
      </nav>
      <h3 className="error-text">{formErrors}</h3>
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/pizza">
        <PizzaForm 
          values={formValues}
          update={onUpdate}
          submit={onSubmit}
        />
      </Route>
    </div>
  );
};
export default App;
