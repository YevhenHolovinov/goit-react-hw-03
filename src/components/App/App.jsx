import { useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import SearchBar from '../SearchBar/SearchBar';
import LangSwitcher from '../LangSwitcher/LangSwitcher'
import CoffeeSize from '../CoffeeSize/CoffeeSize';
//import CoffeeSize from '../CoffeeSize/CoffeeSize'

// const App = () => {
//   const [inputValue, setInputValue] = useState("");

//   const handleChange = (evt) => {
//     setInputValue(evt.target.value);
//   };
 
//     const handleLogin = (userData) => {
//       console.log(userData);
//     };
//     const [lang, setLang] = useState("uk");

//     return (
//       <div>
//         <h1>Please login to your account!</h1>
//         <LoginForm onLogin={handleLogin} />

//         <SearchBar value={inputValue} onChange={handleChange} />
//         <p>{inputValue}</p>

//         <p>Selected language: {lang}</p>
//         <LangSwitcher value={lang} onSelect={setLang} />
//       </div>
//     );
//   };
// const App = () => {
//   const [hasAccepted, setHasAccepted] = useState(false);

//   const handleChange = (evt) => {
//     setHasAccepted(evt.target.checked);
//   };

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           name="terms"
//           checked={hasAccepted}
//           onChange={handleChange}
//         />
//         I accept terms and conditions
//       </label>
//       <button type="button" disabled={!hasAccepted}>
//         Proceed
//       </button>
//     </div>
//   );
// };
// const App = () => {
//   const [coffeeSize, setCoffeeSize] = useState("sm");

//   const handleSizeChange = (evt) => {
//     setCoffeeSize(evt.target.value);
//   };

//   return (
//     <>
//       <h1>Select coffee size</h1>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="sm"
//           checked={coffeeSize === "sm"}
//           onChange={handleSizeChange}
//         />
//         Small
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="md"
//           checked={coffeeSize === "md"}
//           onChange={handleSizeChange}
//         />
//         Meduim
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="lg"
//           checked={coffeeSize === "lg"}
//           onChange={handleSizeChange}
//         />
//         Large
//       </label>
//       <p> Selected size: {coffeeSize}</p>
//     </>
//   );
// };

const App = () => {
  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  // const handleLoginChange = (evt) => {
  //   setValues({
  //     ...values,
  //     login: evt.target.value,
  //   });
  // };

  // const handlePwdChange = (evt) => {
  //   setValues({
  //     ...values,
  //     password: evt.target.value,
  //   });
  // };

  const handleChange = evt => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
    console.log(evt.target.value);
    console.log(evt.target.name);
  };

  const handleSumit = (evt) => {
    evt.preventDefault();
  
    // Значення полів
    console.log(values);
    setValues({
      login: "",
      password: "",
    });
  };
  
  

  return (
    <form onSubmit={handleSumit}>
      <input
        type="text"
        name="login"
        value={values.login}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

  
 export default App;