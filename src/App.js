import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './features/Home';
import { Header } from './components/Header';
import { useSelector } from 'react-redux';
import Terminal from './components/Terminal';

function App() {
  const isTerminalActive = useSelector((state) => state.app.isTerminalActive);
  const terminal = isTerminalActive ? <Terminal /> : null;

  return (
    <div
      id="App"
      className={`bg-white dark:bg-gray-800 min-h-screen ${
        isTerminalActive ? 'terminal__spacer' : ''
      }`}
    >
      <Header />
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </AuthProvider>
      </Router>
      {terminal}
    </div>
  );
}

export default App;
