
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { useState} from 'react';

function App() {
  const [status, setStatus] = useState(false)
  function statusHandler(event) {
    if(event.target.value === "false") {
      setStatus(true)
    } else {
      setStatus(false)
    }
  }
  if(status === false) {
    return (
      <div className="App">
        <SignIn/>
      </div>
    );
  } else {
    return (
    <div className="App">
        <SignUp/>
      </div>   
    )
  }
  }

export default App;
