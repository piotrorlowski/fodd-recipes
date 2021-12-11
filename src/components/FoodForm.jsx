function FoodForm(props) {
  const { onInputChange, onButtonClick, inputRef, errorMsg } = props;

  return (
    <form className="FoodForm">
      <label htmlFor="FoodForm-input" className="FoodForm-label">
        Add ingredients by typing it's name and clicking the button!
      </label>
      <input placeholder="Type ingredient name" type="text" ref={inputRef} id="FoodForm-input" className="FoodForm-input" onChange={onInputChange} />
      <p className="FoodForm-errorMsg">{errorMsg}</p>
      <button type="submit" className="FoodForm-addBtn" onClick={onButtonClick}>Add ingredient!</button>
    </form>
  );
}

export default FoodForm;