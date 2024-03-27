import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredValue } from "../../utility/localstorage";
import ReadBookList from "../ReadBookList/ReadBookList";

const ReadBooks = () => {

    const books = useLoaderData()
    const [booksRead, setBooksRead] = useState([]);

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
        }

    }, [books])


    return (
        <div>
            {
                booksRead.map(book => <ReadBookList key={book.bookId} book={book}></ReadBookList>)
            }
        </div>
    );
};

export default ReadBooks;