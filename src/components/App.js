import React from 'react';
import Header from './ui/Header';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
import Home from './ui/Home';
import Javascript from './ui/Javascript';
import Csharp from './ui/Csharp';
import Resume from './ui/Resume';
import Contact from './ui/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/javascript"><Javascript /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/resume"><Resume /></Route>
        <Route path="/csharp"><Csharp /></Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
