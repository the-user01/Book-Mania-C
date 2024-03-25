import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className='container mx-auto mt-8 '>
            <div >
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold">Books</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
                    {
                        books.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Books;