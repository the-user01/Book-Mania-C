import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredValue, setStorage } from "../../utility/localstorage";
import { getWishlistStoredValue, setWishlistStorage } from "../../utility/wishlistLocalstorage";

const BookDetail = () => {
    const books = useLoaderData();
    const { bookId } = useParams()

    const bookIdInt = parseInt(bookId)

    const book = books.find(id => id.bookId == bookIdInt);

    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;


    /* ----- Read Book Button */

    const handleBookReadBtn = () => {
        const storedValue = getStoredValue();
        const findStoreValue = storedValue.find(data => data === bookIdInt)

        if (findStoreValue) {
            toast("You have already added this book");
        }
        else {
            toast("Book Successfully Added to Read list")
        }

        setStorage(bookIdInt);

    }


    /* Book Wish list Button */

    const handleBookWishlistBtn = () => {
        const readBooktoredValue = getStoredValue();
        const findReadBookStoreValue = readBooktoredValue.find(data => data === bookIdInt)

        const wishlistStoredValue = getWishlistStoredValue();
        const findWishlistValue = wishlistStoredValue.find(data => data === bookIdInt)

        if(findReadBookStoreValue){
            toast("You have already added to Read list")
        }
        else{
            if (findWishlistValue) {
                toast("You have already added this book");
            }
            else {
                toast("Book Successfully Added to Wish list")
            }
    
            setWishlistStorage(bookIdInt);
        }
        
    }

    return (
        <div className="container mx-auto mt-6">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row  gap-12">
                    <img src={image} className=" md:w-[430px] rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold">{bookName}</h1>
                        <p className="text-base my-4 font-bold">By: {author}</p>

                        <hr className="my-2" />
                        <p>{category}</p>
                        <hr className="my-2" />

                        <p className="py-6"><span className="font-bold">Review:</span> {review}</p>

                        <div className="flex gap-8">
                            <p className="font-bold">Tag</p>
                            {
                                tags.map((tag, idx) => <p className="bg-secondary-content text-[#23BE0A] px-4 py-2 rounded-lg" key={idx}>#{tag}</p>)
                            }
                        </div>

                        <hr className="my-6" />

                        <div>
                            <p>Number of Pages: <span className="font-bold">{totalPages}</span></p>
                            <p>Publisher: <span className="font-bold">{publisher}</span></p>
                            <p>Year of Publishing: <span className="font-bold">{yearOfPublishing}</span></p>
                            <p>Rating: <span className="font-bold">{rating}</span></p>
                        </div>

                        <div className="flex gap-4 mt-6">
                            <button className="btn btn-primary" onClick={handleBookReadBtn}>Read</button>
                            <button className="btn bg-[#50B1C9] text-white" onClick={handleBookWishlistBtn}>Wishlist</button>

                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookDetail;