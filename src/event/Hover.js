function Practice {
  e.target.style.background = 'red';
}

return (
  <div className="App">
    <button onMouseOver={changeBackground}>Hover over me!</button>
  </div>
);

export default App;