import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import 
{ Home,
  About,
  AuthWrapper,
  Cart,
  PrivateRoute,
  Error,
  Checkout,
  Products,
  SingleProduct,
} from './pages'
function App() {
  return(
    <AuthWrapper>
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/auth" component={AuthWrapper} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={SingleProduct} />
        <PrivateRoute exact path='/checkout'>
          <Checkout/>
        </PrivateRoute>
        <Route path='*' component={Error} />
      </Switch>
      <Footer />
    </Router>
</AuthWrapper>
    )
}

export default App
