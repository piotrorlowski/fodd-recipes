function FoodList(props) {
  const { children } = props;

  return (
    <div className="FoodList">
      <ul className="FoodList-ul">
        <h2 className="FoodList-h2">List of ingredients: </h2>
        { children }
      </ul>
    </div>
  );
}

export default FoodList;