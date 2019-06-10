import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Verses from './components/Verses';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

const BASE_ENDPOINT = 'https://mannabin.herokuapp.com/search/';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      verses: []
    };

    this.handleGetVerses = this.handleGetVerses.bind(this);
  }

  handleGetVerses(keyword) {
    
    if(keyword){
    axios.get(BASE_ENDPOINT + keyword)
      .then((results) => {
        const data = results.data;
        this.setState({verses: data});
      },
      )
      .catch(() => {
        console.log('通信に失敗しました。');
      });
    }else{
      this.setState({verses: []});
    }

  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <h1 className="app-title">聖句検索</h1>
        <input
          type="text"
          value={this.state.keyword}
          name="keyword"
          onChange={(e) => this.setState({keyword: e.target.value})}
          onBlur={(e) => this.handleGetVerses(e.target.value)}
        />
        <p className="verse-length">一致数:{this.state.verses.length}</p>
        <Verses verses={this.state.verses} />
      </React.Fragment>
    );
  }
}


export default App;
