import React from 'react'
import "./index.css";
import App from './App.jsx'
import ReactDOM from 'react-dom/client'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PagestoRead from './components/PagestoRead/PagestoRead.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import BookDetail from './components/BookDetail/BookDetail.jsx';

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

      /* Listed Books path */
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: ()=> fetch('/data.json')
      },

       /* Book Details path */
       {
        path: '/book/:bookId',
        element: <BookDetail></BookDetail>,
        loader: () => fetch('/data.json')
      },

      /* Pages to read path */
      {
        path: '/pagesRead',
        element: <PagestoRead></PagestoRead>,
        loader: () => fetch('/data.json')
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
