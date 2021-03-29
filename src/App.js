import { useState } from 'react';
import Main from './components/Main';
import User from './components/User';

function App() {
  const [userName, setUserName] = useState('Max');

  return (
    <>
      <Main setUser={setUserName} />
      <User username={userName} />
    </>
  );
}

export default App;
