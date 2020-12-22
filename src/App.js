import logo from './Beerlogo.png';
import './App.css';
import { Component } from 'react';
import ListBeer from './Components/ListBeer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }


  componentDidMount() {
      fetch('https://api.punkapi.com/v2/beers')
      .then(response => response.json())
      .then(data => {
        let beers = data.map(beer => beer);
        this.setState({
          beers

        }, () => {console.log(this.state)})
      })
      .catch(error => console.log(`Error, %{error}`))
  }


  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
           <h1>Punk Beer!</h1>
      </header>
    <div className='layout'>
      < ListBeer beers={this.state.beers }/>
    </div>

    </div>
  );
 }
}

export default App;
