import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import InfoBox from './components/InfoBox';
import BOB from './components/bob_simple_10.json';


const App: React.FC = () => {
  const [selectedPersonIndex, setSelectedPersonIndex] = useState<number | null>(null);

  const dropdownOptions = BOB.BOB.map((person, index: number) => ({
    value: index,
    label: person.firstname + ' ' + person.lastname,
  }));

  const selectedPerson = selectedPersonIndex !== null ? BOB.BOB[selectedPersonIndex] : null;

  return (
    <div>
      <section className='drop-name'>
      <label>Choose a Person:</label>
      </section>
      <section className='drop-down'>
      <Dropdown options={dropdownOptions} onChange={setSelectedPersonIndex} />
      {selectedPerson !== null && <InfoBox person={selectedPerson} />}
      </section>
    </div>
  );
};

export default App;

