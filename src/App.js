import './App.css';
// import { useState } from 'react';

function App() {
  // const [input, setInput] = useState({});
  // const encode = (data) => {
  //   return Object.keys(data)
  //     .map(
  //       (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
  //     )
  //     .join('&');
  // };

  // const handleSubmit = (e) => {
  //   fetch('/', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: encode({ 'form-name': 'test', ...input }),
  //   })
  //     .then(() => alert('Success!'))
  //     .catch((error) => alert(error));

  //   e.preventDefault();
  // };

  // const handleChange = (e) => setInput({ [e.target.name]: e.target.value });

  return (
    <div className="App">
      <form
        data-netlify="true"
        name="pizzaOrder"
        method="post"
      >
        <input type="hidden" name="form-name" value="pizzaOrder"></input> 
        <label>
          What order did the pizza give to the pineapple?
          <input name="order" type="text" />
        </label>
        <input name="input" type="submit" />
      </form>
    </div>
  );
}

export default App;
