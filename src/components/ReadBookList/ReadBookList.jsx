import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";

const ReadBookList = ({ book }) => {
    const { image, bookName, author, tags, yearOfPublishing } = book


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
                            tags.map((tag, idx) => <p key={idx} className='bg-primary-content py-2 text-center rounded-lg text-[#23BE0A] font-bold'>#{tag}</p>)
                        }
                        <p className='flex items-center gap-2 font-sm lg:font-base'><IoLocationOutline /> Year of Publishing: {yearOfPublishing}</p>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary">Watch</button>
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