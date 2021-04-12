import react from 'react';
import '../App.css';
import '../style.css';
import * as styles from '../style.module.css';
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
          <div className={styles.app}>
            <Display total={total} next={next} operation={operation} />
            <ButtonPanel clickHandler={this.handleClick} />
          </div>
        </>
      );
    }
}

export default App;
