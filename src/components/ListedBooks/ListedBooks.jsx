import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredValue } from "../../utility/localstorage";
import ReadBookList from "../ReadBookList/ReadBookList";
import { getWishlistStoredValue } from "../../utility/wishlistLocalstorage";
import WishlistBookList from "../WishlistBookList/WishlistBookList";


const ListedBooks = () => {

    const books = useLoaderData()


    const [booksRead, setBooksRead] = useState([]);
    const [showBooksRead, setShowBooksRead] = useState([]);


    /* Read Books */
    useEffect(() => {
        const storedBooks = getStoredValue();


        if (books.length > 0) {
            const readBooks = [];

            for (const id of storedBooks) {
                const book = books.find(data => data.bookId === id);

                if (book) {
                    readBooks.push(book)
                }
            }
            setBooksRead(readBooks)
            setShowBooksRead(readBooks)
        }

    }, [books])



    /* WishList Books */
    const [booksWishlist, setBooksWishList] = useState([]);

    useEffect(() => {
        const storedBooks = getWishlistStoredValue();


        if (books.length > 0) {
            const readBooks = [];

            for (const id of storedBooks) {
                const book = books.find(data => data.bookId === id);

                if (book) {
                    readBooks.push(book)
                }
            }

            setBooksWishList(readBooks)
        }

    }, [books])




    const handleShowBookFilter = filter => {
        if (filter === 'rating') {
            const sortedRating = booksRead.sort((a, b) => b.rating - a.rating);

            setShowBooksRead([...sortedRating])
        }
         else if (filter === 'pageNumber') {
            const sortedRating = booksRead.sort((a, b) => b.totalPages - a.totalPages);

            setShowBooksRead([...sortedRating])
        }
         else if (filter === 'publishYear') {
            const sortedRating = booksRead.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);

            setShowBooksRead([...sortedRating])
        }
        else{
            setShowBooksRead([...booksRead])
        }
    }


    return (
        <div className="container mx-auto">
            <div>
                <div className="text-center bg-secondary-content mt-4 py-4">
                    <h3 className="text-xl lg:text-2xl font-bold">Books</h3>
                </div>

                <div className="text-center my-8 ">
                    <details className="dropdown">
                        <summary className="m-1 btn bg-[#23BE0A] text-white px-6">Sort By: <span className="rotate-90">{'>'}</span></summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 gap-2 bg-[#1313130D]">
                            <li onClick={() => handleShowBookFilter('rating')}><a>Rating</a></li>
                            <li onClick={()=> handleShowBookFilter('pageNumber')}><a>Number of Pages</a></li>
                            <li onClick={()=> handleShowBookFilter('publishYear')}><a>Publish Year</a></li>
                        </ul>
                    </details>
                </div>
            </div>

            <div>
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>WishList Books</Tab>
                    </TabList>

                    <TabPanel>
                        {
                            showBooksRead.map(book => <ReadBookList key={book.bookId} book={book}></ReadBookList>)
                        }
                    </TabPanel>

                    <TabPanel>
                        {
                            booksWishlist.map(book => <WishlistBookList key={book.bookId} book={book}></WishlistBookList>)
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ListedBooks;