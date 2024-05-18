import Counter from "./components/Counter";
import Form from "./components/Form";
import Student from "./components/Student";
import StudentList from "./components/StudentList";

function App() {
  const students = [
    { id: 1, name: "Alice", liveIn: "New York" },
    { id: 2, name: "Bob", liveIn: "Los Angeles" },
    { id: 3, name: "Charlie", liveIn: "Chicago" },
  ];
  return (
    <div className='App'>
      <section>
        <h1>Hello Vite + React Js</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ab
          doloremque qui pariatur quisquam enim obcaecati eaque. Eos, facilis
          nisi sequi explicabo possimus voluptas esse debitis. Doloribus
          exercitationem unde non.
        </p>

        <Counter />

        <StudentList>
          {students.map((student) => (
            <Student
              key={student.id}
              students={student}
              name={student.name}
              liveIn={student.liveIn}
            />
          ))}
        </StudentList>

        <Form />
      </section>
    </div>
  );
}

export default App;
