
const CoffeeSize = (value, onSizeCoffee) => {
    
    return (
        <>
        <h1>Select coffee size</h1>
        <label  value={value}>
          <input
            type="radio"
            name="coffeeSize"
            value="sm"
            
            onChange={onSizeCoffee}
          />
          Small
        </label>
        <label  value={value}>
          <input
            type="radio"
            name="coffeeSize"
            value="md"
            
            onChange={onSizeCoffee}
          />
          Meduim
        </label>
        <label  value={value}>
          <input
            type="radio"
            name="coffeeSize"
            value="lg"
            
            onChange={onSizeCoffee}
          />
          Large
        </label>
      </>
    );

};
export default CoffeeSize;