import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './modules/home';
import { Products } from './modules/products/products';
import './App.css';
import { Product } from './modules/product';
import { NewProfessor } from './modules/new-professor';
import { NewAfiliate } from './modules/new-afiliate';
import { Dashboard } from './modules/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PaymentModule } from './modules/cart';


const App: React.FC = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
          key="home"
          path="/"
          element={<Home/>}
          />
          <Route
          key="products"
          path="/recent"
          element={<Products/>}
          />
          <Route
          key="create-course"
          path="/create-course"
          element={<NewProfessor/>}
          />
          <Route
          key="afiliate"
          path="/afiliate"
          element={<NewAfiliate/>}
          />
          <Route
          key="products"
          path="/product/:id"
          element={<Product/>}
          />
          <Route
          key="products"
          path="/dashboard"
          element={<Dashboard/>}
          />
          <Route
          key="products"
          path="/cart"
          element={<PaymentModule/>}
          />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
