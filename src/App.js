import { Link, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages'


function App() {

  return (
    <div className="wrapper">
      <Link to="/">
        <Header />
      </Link>
      <div className="content">
        <Route path='/' component={Home} exact />
        <Route path='/cart' component={Cart} exact />
      </div>
    </div>
  );
}

export default App;