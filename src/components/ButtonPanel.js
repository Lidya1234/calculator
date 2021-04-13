import { PropTypes } from 'prop-types';
import Buttons from './Button';
import * as styles from '../style.module.css';

const ButtonPanel = ({ clickHandler }) => (
  <>
    <div className={styles.buttonpannel}>
      <div>
        <Buttons buttonName="AC" color="white" wide="false" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="+/-" color="white" wide="false" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="%" color="white" wide="false" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="÷" color="orange" wide="false" clickHandler={(buttonName) => clickHandler(buttonName)} />
      </div>
      <div>
        <Buttons buttonName="7" color="white" wide="false" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="8" color="white" wide="false" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="9" color="white" wide="false" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="X" color="orange" wide="false" clickHandler={(buttonName) => clickHandler(buttonName)} />
      </div>
      <div>
        <Buttons buttonName="4" color="white" wide="false" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="5" color="white" wide="false" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="6" color="white" wide="false" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="-" color="orange" wide="false" clickHandler={(buttonName) => clickHandler(buttonName)} />
      </div>
      <div>
        <Buttons buttonName="1" color="white" wide="false" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="2" color="white" wide="false" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="3" color="white" wide="false" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="+" color="orange" wide="false" clickHandler={(buttonName) => clickHandler(buttonName)} />
      </div>
      <div>
        <Buttons buttonName="0" color="white" wide="false" clickHandler={(buttonName) => clickHandler(buttonName)} />
        <Buttons buttonName="." color="white" wide="true" clickHandler={(buttonName) => clickHandler(buttonName)} />

        <Buttons buttonName="=" color="orange" wide="false" clickHandler={(buttonName) => clickHandler(buttonName)} />
      </div>
    </div>
  </>

);
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
