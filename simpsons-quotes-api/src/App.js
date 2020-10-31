import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
import QuoteCard from './components/QuoteCard';

// const sampleQuote = {
//   quote: "By chilling my loins I increase the chances of impregnating my wife.",
//   character: "Apu Nahasapeemapetilon",
//   image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
//   characterDirection: "Left"
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null
    }
    this.getQuote = this.getQuote.bind(this);
  }


  componentDidMount(){
    this.getQuote()
  }


  getQuote() {
    axios.get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then(res => res.data)
      .then(data => {
        console.log(data);
        this.setState({ quote: data[0]})
      })
  }

  render() {
    return (
      <div className="App">
        {this.state.quote ? (
        <QuoteCard quote = {this.state.quote}/>) :
        <p>Looking for quote..</p> }
        <button type="button" onClick={this.getQuote}>Get new quote!</button>
      </div>
    );
  }
}

export default App;