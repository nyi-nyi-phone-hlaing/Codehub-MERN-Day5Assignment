import PropTypes from "prop-types";

const User = ({ name, age }) => {
  return (
    <ul>
      <li>{name}</li>
      <li>{age}</li>
    </ul>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default User;
