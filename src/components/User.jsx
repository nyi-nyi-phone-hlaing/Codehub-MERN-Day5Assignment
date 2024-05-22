import PropTypes from "prop-types";

const User = ({ name, live, email }) => {
  return (
    <ul>
      <li>Name : {name}</li>
      <li>Live : {live}</li>
      <li>Email : {email} </li>
    </ul>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default User;
