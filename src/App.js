import { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);

  const handlerClear = () => {
    setPeople([]);
  };
  const handlerGet = () => {
    setPeople(data);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        <button onClick={handlerClear}>Clear all</button>
        <button onClick={handlerGet}>Get all</button>
      </section>
    </main>
  );
}

export default App;
