import React from 'react';
import './Prop.css';
import './App.css';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";

import Header from "./comps/Header";
import HomePage from "./comps/Home";
import Post from "./comps/post";
import Footer from "./comps/Footer";
import mongoose from "mongoose";

try {
  mongoose.connect('mongodb://localhost/MyData', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, () =>
    console.log("connected"));
} catch (error) {
  console.log("could not connect");
}


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>// when we want to render a router which will match the path parameter
    <Route path="/abc" component={Post} />
    <Route path="/" component={HomePage} />
  </Switch>
  <Footer/>
    </BrowserRouter>
  );
}

export default App;
 