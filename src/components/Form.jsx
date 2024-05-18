import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!name || !age) return alert("Please enter your name and age");
    alert("Name: " + name + " Age: " + age);
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type='text'
        name='name'
        placeholder='Enter your name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='number'
        name='age'
        placeholder='Enter your age'
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;
