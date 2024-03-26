import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetail = () => {
    const books = useLoaderData();
    const { bookId } = useParams()

    const bookIdInt = parseInt(bookId)

    const book = books.find(id => id.bookId == bookIdInt);

    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

    const handleBookReadBtn = ()=> {
        toast("Book Successfully added")
    }

    const handleBookWishlistBtn = ()=> {
        toast("Book Successfully added to Wishlist")
    }

    return (
        <div className="container mx-auto mt-6">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={image} className=" md:min-h-screen rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p className="text-base">By: {author}</p>

                        <hr className="my-2" />
                        <p>{category}</p>
                        <hr className="my-2" />

                        <p className="py-6"><span className="font-bold">Review:</span> {review}</p>

                        <div className="flex gap-8">
                            <p className="font-bold">Tag</p>
                            {
                                tags.map((tag, idx) => <p key={idx}>#{tag}</p>)
                            }
                        </div>

                        <hr className="my-6" />

                        <div>
                            <p>Number of Pages: <span className="font-bold">{totalPages}</span></p>
                            <p>Publisher: <span className="font-bold">{publisher}</span></p>
                            <p>Year of Publishing: <span className="font-bold">{yearOfPublishing}</span></p>
                            <p>Rating: <span className="font-bold">{rating}</span></p>
                        </div>

                        <div className="flex gap-4 justify-end mt-4">
                            <button className="btn btn-primary" onClick={handleBookReadBtn}>Read</button>
                            <button className="btn btn-primary" onClick={handleBookWishlistBtn}>Wishlist</button>

                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookDetail;