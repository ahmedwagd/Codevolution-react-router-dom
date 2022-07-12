import React from 'react';
import { Routes, Route } from 'react-router-dom'; // 2nd step to configur routes

import './App.css';
import { AuthProvider, ANavbar, OrderSummary, Products, FeaturedProducts, NewProducts, UserDetailes, Admin, RequireAuth } from './components'
// import About from './pages/About';
import Home from './pages/Home';
import Users from './pages/Users';
import Profile from './pages/Profile';
import { NoMatch } from './pages/NoMatchRoute/NoMatch';
import Login from './pages/Login';
const LazyAbout = React.lazy(() => import('./pages/About')); // Lazy loading for about page

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <ANavbar />
        <Routes>{/*3th step to configure routes - using Routes & Route components from react-router-dom & Routes can contain multible components of Route*/}
          <Route path='/' element={<Home />} ></Route>{/*4th step in Route component that accepts path and element props to render when the path is matched & set Home component for root of the app*/}
          <Route path='about' element={<React.Suspense fallback={'Loading...'}><LazyAbout /></React.Suspense>} ></Route>{/*5th step in Route component - About component for about path*/}
          <Route path='order-summary' element={<OrderSummary />} />
          <Route path='products' element={<Products />} >
            <Route index element={<FeaturedProducts />} />{/* index route the path will be {/products} and still render featured page */}
            <Route path='featured' element={<FeaturedProducts />} />
            <Route path='new' element={<NewProducts />} />
          </Route>
          <Route path='users' element={<Users />} >
            <Route path=':userId' element={<UserDetailes />} />
            <Route path='admin' element={<Admin />} />
          </Route>
          <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<NoMatch />} />{/*this routes for 404 page for no match routes*/}
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
