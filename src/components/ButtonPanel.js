import { PropTypes } from 'prop-types';
import Buttons from './Button';

const ButtonPanel = ({ clickHandler }) => (
  <>
    <div>
      <Buttons buttonName="AC" clickHandler={(buttonName) => clickHandler(buttonName)} />
      <Buttons buttonName="+/-" clickHandler={(buttonName) => clickHandler(buttonName)} />
      <Buttons buttonName="%" clickHandler={(buttonName) => clickHandler(buttonName)} />
      <Buttons buttonName="÷" clickHandler={(buttonName) => clickHandler(buttonName)} />
    </div>
    <div>
      <Buttons buttonName="7" clickHandler={(buttonName) => clickHandler(buttonName)} />
      <Buttons buttonName="8" clickHandler={(buttonName) => clickHandler(buttonName)} />
      <Buttons buttonName="9" clickHandler={(buttonName) => clickHandler(buttonName)} />
      <Buttons buttonName="X" clickHandler={(buttonName) => clickHandler(buttonName)} />
    </div>
    <div>
      <Buttons buttonName="4" clickHandler={(buttonName) => clickHandler(buttonName)} />
      <Buttons buttonName="5" clickHandler={(buttonName) => clickHandler(buttonName)} />
      <Buttons buttonName="6" clickHandler={(buttonName) => clickHandler(buttonName)} />
      <Buttons buttonName="-" clickHandler={(buttonName) => clickHandler(buttonName)} />
    </div>
    <div>
      <Buttons buttonName="1" clickHandler={(buttonName) => clickHandler(buttonName)} />
      <Buttons buttonName="2" clickHandler={(buttonName) => clickHandler(buttonName)} />
      <Buttons buttonName="3" clickHandler={(buttonName) => clickHandler(buttonName)} />
      <Buttons buttonName="+" clickHandler={(buttonName) => clickHandler(buttonName)} />
    </div>
    <div>
      <Buttons buttonName="0" clickHandler={(buttonName) => clickHandler(buttonName)} />
      <Buttons buttonName="." clickHandler={(buttonName) => clickHandler(buttonName)} />
      <Buttons buttonName="=" clickHandler={(buttonName) => clickHandler(buttonName)} />
      <Buttons buttonName=" " clickHandler={(buttonName) => clickHandler(buttonName)} />
    </div>
  </>

);
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
