import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './features/Home';
import { Header } from './components/Header';

function App() {
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
    </div>
  );
}

export default App;
