import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './features/Home';
import { Header } from './components/Header';
import { useSelector } from 'react-redux';
import Terminal from './components/Terminal';

function App() {
  const isTerminalActive = useSelector((state) => state.app.isTerminalActive);
  const terminal = isTerminalActive ? <Terminal /> : null;
  const spacer = isTerminalActive ? (
    <div className="pf-terminal__spacer"></div>
  ) : null;
  return (
    <div id="App" className="bg-white dark:bg-gray-800 min-h-screen">
      <Header />
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </AuthProvider>
      </Router>
      {spacer}
      {terminal}
    </div>
  );
}

export default App;
