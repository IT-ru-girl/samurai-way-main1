import React from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import state, {addPost, } from './redux/state';


function App() {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                {/*<Route path="/dialogs" component={Dialogs}/>*/}
                {/*<Route path="/profile" component={Profile}/>*/}
                    <div className="app-wrapper-content">
                        <Route path="/dialogs" render={() => <Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} addPostCallback={addPost}/>}/>

                        <Route path="/profile/" render={() => <Profile posts={state.profilePage.posts}  addPostCallback={addPost}  />}/>

                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    {/*<Dialogs/>*/}
                    {/*<Profile/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
