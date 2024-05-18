import PropTypes from "prop-types";

const UserList = ({ children }) => {
  return <div className='user-container'>{children}</div>;
};

UserList.propTypes = {
  children: PropTypes.node,
};

export default UserList;
