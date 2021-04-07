import { PropTypes } from 'prop-types';
import Buttons from './Button';
import * as styles from '../style.module.css';

const ButtonPanel = ({ clickHandler }) => (
  <>
    <div className={styles.buttonpannel}>
      <div>
        <Buttons buttonName="AC" color="light" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="+/-" color="light" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="%" color="light" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="÷" color="warning" clickHandler={(buttonName) => clickHandler(buttonName)} />
      </div>
      <div>
        <Buttons buttonName="7" color="light" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="8" color="light" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="9" color="light" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="X" color="warning" clickHandler={(buttonName) => clickHandler(buttonName)} />
      </div>
      <div>
        <Buttons buttonName="4" color="light" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="5" color="light" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="6" color="light" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="-" color="warning" clickHandler={(buttonName) => clickHandler(buttonName)} />
      </div>
      <div>
        <Buttons buttonName="1" color="light" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="2" color="light" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="3" color="light" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="+" color="warning" clickHandler={(buttonName) => clickHandler(buttonName)} />
      </div>
      <div>
        <Buttons buttonName="0" color="light" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="." color="light" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName=" " color="light" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="=" color="warning" clickHandler={(buttonName) => clickHandler(buttonName)} />
      </div>
    </div>
  </>

);
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
