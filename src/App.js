import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert'

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  //search users from github
  searchUsers = async text => {
    //async bei arrow function hier setzen
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=$
      {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
      {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => {
    this.setState({
      users: [],
      loading: false,
      alert: null,
    })
  }

  setAlert = (msg, type) => {
    this.setState({alert: {msg, type}})
    setTimeout(() => this.setState({alert: null}), 3000);
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert alert={this.state.alert} />
          <Search setAlert={this.setAlert} searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length>0}/>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
