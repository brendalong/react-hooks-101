import React, {useState} from 'react';
import firebase from 'firebase/app';
import fbConnection from './db/config';

import './App.scss';

//make a connection when app first loads
fbConnection();

function App(){
  //local state for this function
  //the state, function to update
  const [authed, setAuthed] = useState(false);

  authListener = () => firebase.auth().onAuthStateChanged((user) => {
    console.log("authListener called", user);
    if (user) {
      // this.setState({ authed: true });
      setAuthed(true);
    } else {
      // this.setState({ authed: false });
      setAuthed(false);
    }
  });

  componentDidMount() {
    this.authListener();
  }

  componentWillUnmount() {
    // console.log('componentWillUnMount called')
    this.authListener();
  }

  loadComponent = () => {
    //conditions to render correct
    let componentToLoad = '';
    if (authed){
      componentToLoad = <h2>User Logged In, Yippee</h2>
    }else{
      componentToLoad = <h2>No body's home...</h2>;
    }
    return componentToLoad;
  }


      return (
        <div className="App">
          <MyNavbar authed={authed} />
          {this.loadComponent()}
        </div>
      );

}

export default App;
