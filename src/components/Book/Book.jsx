import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Book = (props) => {
    const { book } = props

    const { bookId, image, bookName, tags, author, category, rating } = book

    return (
        <Link to={`/book/${bookId}`}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl cursor-pointer">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt={bookName} className='p-6 rounded-xl' /></figure>
                <div className="card-body">
                    <div className='flex my-4 gap-4 text-center'>
                        {
                            tags.map((tag, idx) => <p key={idx} className='text-lime-500 bg-slate-100 py-2 text-lg rounded-xl'>{tag}</p>)
                        }
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p className='text-base'>By: {author}</p>

                    <hr className='mt-2' />
                </div>
                <div className='flex justify-between mx-5 mb-4'>
                    <p>{category}</p>
                    <p className='flex gap-2 items-center'>{rating} <FaRegStar /></p>
                </div>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object,
}

export default Book;