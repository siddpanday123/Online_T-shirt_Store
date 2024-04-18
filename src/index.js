import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CartPage from './Component/CartDataComponent/CartPage';
import ProductSearch from './Component/ProductList&CartComponent/ProductSearch';


const appRouter=createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // errorElement: <Error />
    children:[
      {
        path:'/',
        element:<ProductSearch />
      },
      {
        path:"/CartPage",
        element:<CartPage />
      }
    ]
  }
  
])

  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter}>
          <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

  // root.render(<RouterProvider router={appRouter}/>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
