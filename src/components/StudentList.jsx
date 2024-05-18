import PropTypes from "prop-types";
const StudentList = ({ children }) => {
  return <div className='student-container'>{children}</div>;
};

StudentList.propTypes = {
  children: PropTypes.node,
};

export default StudentList;
