import Header from './components/Header'


function App() {

  const name = 'Lewis Maina Muriuki'

  return (
    <div className="container">
      <Header title = "My Task Tracker" />
      <h1>Hello from React</h1>
      <h2>Hello { name }</h2>
    </div>
  );
}

export default App;
   