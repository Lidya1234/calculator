import react from 'react';
import '../App.css';
import '../style.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import 'bootstrap/dist/css/bootstrap.min.css';
import calculate from '../logic/calculate';

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,

    };
  }

    handleClick = ({ buttonName }) => {
      const result = calculate(this.state, buttonName);

      this.setState(result);
    }

    render() {
      const { total, next, operation } = this.state;

      return (
        <>

          <Display total={total} next={next} operation={operation} />
          <ButtonPanel clickHandler={this.handleClick} />
        </>
      );
    }
}

export default App;
