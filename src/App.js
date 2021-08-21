import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { Cart, Home } from './pages';
import { setPizzas } from './redux/actions/pizzas';


function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      console.log(data);
      dispatch(setPizzas(data));
    })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App

// const mapStateToProps = (state) =>{
//   return {
//     items: state.pizzas.items
//   }
// }

// const mapDispatchToProps = {
//   setPizzas,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);