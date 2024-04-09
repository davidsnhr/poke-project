import './App.css';

function App() {
  return (
    <>
      <div className="main-container">
        <h1>Hola mundo</h1>
        {/* screen */}
        <div className="layout-game">
          <div className="container-screen">
            <div className="screen-layout"></div>
          </div>
          <div className="buttons-container">
          {/* buttons pad*/}
            <div className="container-pad">
              <button className="btn-right"></button>
              <div className="container-up-down">
                <button className="btn-up"></button>
                <button className="btn-down"></button>
              </div>
              <button className="btn-right"></button>
            </div>
            {/* buttons select */}
            <div className="container-select">
              <div className="container-select-btn">
                <button className="btn-select"></button>
                <div>select</div>
              </div>
              <div className="container-start">
                <button className="btn-start"></button>
                <div>start</div>
              </div>
            </div>
            {/* buttons actions */}
            <div className="container-action">
              <div className="button-b-container">
                <button className="button-b"></button>
                <div>B</div>
              </div>
              <div className="button-a-container">
                <button className="button-a"></button>
                <div>A</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
