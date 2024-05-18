import PropTypes from "prop-types";
import { useState } from "react";

const Student = ({ name, liveIn, students }) => {
  const [updateName, setUpdateName] = useState(name);
  const handleUpdateName = () => {
    switch (students.id) {
      case 1:
        setUpdateName("Updated Name 1");
        break;
      case 2:
        setUpdateName("Updated Name 2");
        break;
      case 3:
        setUpdateName("Updated Name 3");
        break;
      default:
        break;
    }
  };
  return (
    <ul>
      <li>{updateName}</li>
      <li>{liveIn}</li>
      <button onClick={handleUpdateName}>Update Name </button>
    </ul>
  );
};

Student.propTypes = {
  students: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  liveIn: PropTypes.string.isRequired,
};

export default Student;
