import { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ setUsers }) => {
  const [name, setName] = useState("");
  const [live, setLive] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
      name.trim().length === 0 ||
      live.trim().length === 0 ||
      email.trim().length === 0
    )
      return alert("Please fill in all the fields");
    setUsers((users) => [...users, { name, live, email }]);
    setName("");
    setLive("");
    setEmail("");
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
        type='text'
        name='live'
        placeholder='Enter your live'
        value={live}
        onChange={(e) => setLive(e.target.value)}
      />
      <input
        type='text'
        name='email'
        placeholder='Enter your email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

Form.propTypes = {
  setUsers: PropTypes.func.isRequired,
};

export default Form;
