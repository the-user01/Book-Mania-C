import PropTypes from 'prop-types';

const ReadBookList = ({ book }) => {
    const { image, bookName, tags, author, category, rating } = book


    return (
        <div className='my-6'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt={bookName} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p>Click the button to watch on Jetflix app.</p>
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