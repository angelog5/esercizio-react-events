import AlertClock from "./components/AlertClock";

function App() {
  const handleButtonClick = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`Current time: ${currentTime}`);
  };

  return (
    <div>
      <h1>Alert Clock Example</h1>
      <AlertClock onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
