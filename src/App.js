import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { Cart, Home } from './pages';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  )
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