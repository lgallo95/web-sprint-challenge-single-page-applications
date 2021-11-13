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
    update(name, realValue);
  };

  return (
    <div>
      <h1> Pizza Form </h1>
      <form id="pizza-form" onSubmit={onSubmit}>
      <label> Name
          <input
            id="name-input"
            name='name'
            type="text"
            value={values.name}
            onChange={onChange}
            placeholder="name"
          />
        </label>
        <label> Size
          <select
            value={values.size}
            name="size"
            onChange={onChange}
            id="size-dropdown"
          >
            <option value="">-- Select a size --</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
        <label> Pepperoni
        <input
            type='checkbox'
            name='pepperoni'
            onChange={onChange}
            checked={values.pepperoni}
          />
        </label>
        <label> Cheese
        <input
            type='checkbox'
            name='cheese'
            onChange={onChange}
            checked={values.cheese}
          />
        </label>
        <label> Bacon
        <input
            type='checkbox'
            name='bacon'
            onChange={onChange}
            checked={values.bacon}
          />
        </label>
        <label> Steak
        <input
            type='checkbox'
            name='steak'
            onChange={onChange}
            checked={values.steak}
          />
        </label>
        <label>Special Instructions
          <textarea
            id = "special-text"
            name="special"
            value={values.special}
            onChange={onChange}
            placeholder="Special Instructions"
          />
        </label>
      </form>
    </div>
  );
};

export default PizzaForm;
