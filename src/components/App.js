/* eslint-disable no-unused-vars */
import '../App.css';
import '../style.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import 'bootstrap/dist/css/bootstrap.min.css';
import calculate from '../logic/calculate';

function App() {
  return (
    <>
      <Display />
      <ButtonPanel />
    </>

  );
}

export default App;
