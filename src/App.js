import './App.css';
import Employee from './components/Employee';

function App() {
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
      <>
          <Employee name = 'Luigi' role = 'Plumber' />
          <Employee name = 'Mario'/>
          <Employee name = 'Yoshi' />
      </>
      ) : (
        <p>You cannot see the employees</p>
      ) }
    </div>
  );
}

export default App;
