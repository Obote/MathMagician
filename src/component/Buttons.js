function Buttons() {
  return (
    <div className="calc">
      <input type="text" placeholder="0" id="answer" />
      <input type="button" value="AC" className="button" />
      <input type="button" value="+/-" className="button" />
      <input type="button" value="%" className="button" />
      <input type="button" value="÷" className="button orange" />

      <input type="button" value="7" className="button" />
      <input type="button" value="8" className="button" />
      <input type="button" value="9" className="button" />
      <input type="button" value="*" className="button orange" />

      <input type="button" value="4" className="button" />
      <input type="button" value="5" className="button" />
      <input type="button" value="6" className="button" />
      <input type="button" value="-" className="button orange" />

      <input type="button" value="1" className="button" />
      <input type="button" value="2" className="button" />
      <input type="button" value="3" className="button" />
      <input type="button" value="+" className="button orange" />

      <input type="button" value="0" className="button double" />
      <input type="button" value="." className="button" />
      <input type="button" value="=" className="button orange" />
    </div>
  );
}

export default Buttons;
