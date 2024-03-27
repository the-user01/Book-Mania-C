import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishlistStoredValue } from "../../utility/wishlistLocalstorage";
import WishlistBookList from "../WishlistBookList/WishlistBookList";

const BookWishlist = () => {

    const books = useLoaderData()
    const [booksRead, setBooksRead] = useState([]);

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

            setBooksRead(readBooks)
        }

    }, [books])

    return (
        <div>
            {
                booksRead.map(book => <WishlistBookList key={book.bookId} book={book}></WishlistBookList>)
            }
        </div>
    );
};

export default BookWishlist;