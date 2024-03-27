import React from 'react'
import "./index.css";

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PagestoRead from './components/PagestoRead/PagestoRead.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import BookDetail from './components/BookDetail/BookDetail.jsx';
import ReadBooks from './components/ReadBooks/ReadBooks.jsx';
import BookWishlist from './components/BookWishlist/BookWishlist.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorMessage></ErrorMessage>,
    children: [

      /* Home page path */
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            path: '/listedBooks/readBooks',
            element: <ReadBooks></ReadBooks>,
            loader: () => fetch('data.json')
          },
          {
            path: '/listedBooks/wishlistBooks',
            element: <BookWishlist></BookWishlist>,
            loader: () => fetch('data.json')
          },
        ]

        // loader: ()=> fetch('data.json')
      },
      {
        path: '/pagesRead',
        element: <PagestoRead></PagestoRead>
      },
      {
        path: '/book/:bookId',
        element: <BookDetail></BookDetail>,
        loader: () => fetch('data.json')
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
