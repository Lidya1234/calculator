import { useState } from 'react';
import '../App.css';
import '../style.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import 'bootstrap/dist/css/bootstrap.min.css';
import calculate from '../logic/calculate';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = ({ buttonName }) => {
    const result = calculate({ total, next, operation }, buttonName);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  return (

    <>

      <Display total={total} next={next} operation={operation} />

      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
