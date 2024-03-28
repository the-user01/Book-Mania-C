import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { Link } from 'react-router-dom';



const ReadBookList = ({book}) => {

    const {bookId, image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = book;

    // console.log(book);


    return (
        <div className='my-6'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt={bookName} /></figure>

                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p className='font-bold text-sm mb-2'>By: {author}</p>
                    <div className='flex my-2 gap-4'>
                        <p className='font-bold'>Tag</p>
                        {
                            tags.map((tag, idx) => <p key={idx} className='bg-[#23BE0A0D] py-2 text-center rounded-lg text-[#23BE0A] font-bold'>#{tag}</p>)
                        }
                        <p className='flex items-center gap-2 font-sm lg:font-base'><IoLocationOutline /> Year of Publishing: {yearOfPublishing}</p>
                    </div>
                    <div className='flex my-4'>
                        <p className='flex gap-2 items-center'><IoPersonOutline />Publisher: {publisher}</p>
                        <p className='flex gap-2 items-center'><MdOutlineLibraryBooks />Page: {totalPages}</p>
                    </div>

                        <hr />


                    <div className="card-actions gap-6 my-4 w-2/3">
                        <p className='bg-[#328EFF26] text-[#328EFF] py-2 text-center rounded-lg gap-6 w-24'>Category: {category}</p>

                        <p className='bg-[#FFAC3326] text-[#FFAC33] py-2 text-center rounded-lg gap-6 w-24'>Rating: {rating}</p>

                        <Link to={`/book/:${bookId}`}><button className="btn px-6 rounded-lg bg-[#23BE0A] text-white">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReadBookList.propTypes = {
    book: PropTypes.object,
}

export default ReadBookList;