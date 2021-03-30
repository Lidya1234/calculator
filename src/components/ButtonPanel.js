import Buttons from './Button';

const ButtonPanel = () => (
  <>
    <div>
      <Buttons buttonName="AC" />
      <Buttons buttonName="+/-" />
      <Buttons buttonName="%" />
      <Buttons buttonName="÷" />
    </div>
    <div>
      <Buttons buttonName="7" />
      <Buttons buttonName="8" />
      <Buttons buttonName="9" />
      <Buttons buttonName="X" />
    </div>
    <div>
      <Buttons buttonName="4" />
      <Buttons buttonName="5" />
      <Buttons buttonName="6" />
      <Buttons buttonName="-" />
    </div>
    <div>
      <Buttons buttonName="0" />
      <Buttons buttonName="." />
      <Buttons buttonName="=" />
      <Buttons buttonName=" " />
    </div>
  </>

);

export default ButtonPanel;
