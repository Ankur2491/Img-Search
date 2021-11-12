import './App.css';
import React from 'react';
import Main from './components/Main';
class App extends React.Component{
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">Img-Search</a>
            <a class="nav-link" href="https://github.com/Ankur2491"><i class="fab fa-github fa-lg"></i></a>
          </div>
        </nav>
        <br/>
        <Main />
      </div>
    )
  }
}
export default App;
