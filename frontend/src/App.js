import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { useState} from 'react';


import CartPage from "./pages/cart-page/CartPage.jsx"
import ProductPage from "./pages/product-page/ProductPage.jsx"
import HomePage from "./pages/home-page/HomePage.jsx"
import Navbar from './components/navbar/Navbar.jsx';
import Backdrop from './components/backdrop/Backdrop';
import Sidedraw from './components/side-draw/Sidedraw';


function App() {
  const [sideToggle, setSideToggle] = useState(false);


  const [addCart, setAddCart] = useState([]);

  const getCartIndex = (id) =>{
    for(let i =0; i<addCart.length; i++){
      if (addCart[i].url === id){
        return i;
      }
    }

    return -1
  }

 
  const setCart = (id, n, p, i, q) =>{
    const index = getCartIndex(id);
    if( index === -1 ){
      setAddCart([...addCart, {
        url: id,
        name: n,
        price: p,
        image: i,
        quantity: q
      }])
    }else{
      let copiedArray = [...addCart];
      copiedArray[index].quantity = parseInt(addCart[index].quantity) + parseInt(q);
      setAddCart(copiedArray);
    }
    
  }

  const deleteCart = async (id) => {
    let index = getCartIndex(id);
    if (index !== -1){
      await setAddCart(addCart.filter(item => item.url !== id));
      console.log(addCart)
    }
    
  }


  return (
    <Router>
      <Navbar show={sideToggle} click={()=>setSideToggle(true)} cart={addCart.length}/>
      <Sidedraw show={sideToggle} click={()=>setSideToggle(false)} cart={addCart.length}/>
      <Backdrop show={sideToggle} click={()=>setSideToggle(false)}/>
      <main>
        <Switch>
          <Route exact path="/" >
            <HomePage />
          </Route>
          <Route exact path="/product/:id">
            <ProductPage setCart={setCart} />
          </Route>
          <Route exact path="/cart">
            <CartPage addCart={addCart} deleteCart={deleteCart}/>
          </Route>

        </Switch>
      </main>
      
      </Router>
  );
}

export default App;
