import React from 'react';
import { element } from 'prop-types';
import Header from '../shared/components/layout/Header/Header';
import Content from '../shared/components/layout/Content/Content';
import Footer from '../shared/components/layout/Footer/Footer';
import './App.css';

const App = props => (
  <div className="App">
    <Header title="Phrases Store" />

    <Content>
      {props.children}
    </Content>

    <Footer />
  </div>
);

App.propTypes = {
  children: element
};

export default App;
