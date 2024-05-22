import { useRef } from "react";
import PropTypes from "prop-types";

const Form = ({ setUsers }) => {
  const name = useRef();
  const live = useRef();
  const email = useRef();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
      name.current.value.trim().length === 0 ||
      live.current.value.trim().length === 0 ||
      email.current.value.trim().length === 0
    )
      return alert("Please fill in all the fields");
    setUsers((users) => [
      ...users,
      {
        name: name.current.value,
        live: live.current.value,
        email: email.current.value,
      },
    ]);
    name.current.value = "";
    live.current.value = "";
    email.current.value = "";
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <input name='name' placeholder='Enter your name' ref={name} />
      <input name='live' placeholder='Enter your live' ref={live} />
      <input name='email' placeholder='Enter your email' ref={email} />
      <button type='submit'>Submit</button>
    </form>
  );
};

Form.propTypes = {
  setUsers: PropTypes.func.isRequired,
};

export default Form;
