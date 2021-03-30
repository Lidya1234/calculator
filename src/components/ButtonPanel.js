import Button from './Button';

const ButtonPanel = () => (
  <>
    <div>
      <Button buttonName="AC" />
      <Button buttonName="+/-" />
      <Button buttonName="%" />
      <Button buttonName="÷" />
    </div>
    <div>
      <Button buttonName="7" />
      <Button buttonName="8" />
      <Button buttonName="9" />
      <Button buttonName="X" />
    </div>
    <div>
      <Button buttonName="4" />
      <Button buttonName="5" />
      <Button buttonName="6" />
      <Button buttonName="-" />
    </div>
    <div>
      <Button buttonName="0" />
      <Button buttonName="." />
      <Button buttonName="=" />
      <Button buttonName=" " />
    </div>
  </>

);

export default ButtonPanel;
