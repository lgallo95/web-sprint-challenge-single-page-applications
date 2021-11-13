import React from "react";

const PizzaForm = (props) => {
  const { values, update, submit } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const realValue = type === "checkbox" ? checked : value;
    change(name, realValue);
  };

  return (
    <div>
      <h1> Pizza Form </h1>
      <form id="pizza-form" onSubmit={onSubmit}>
        <label> Name
          <input
            id="name-input"
            type="text"
            value={values.name}
            onChange={onChange}
            placeholder="name"
          />
        </label>
      </form>
    </div>
  );
};

export default PizzaForm;
