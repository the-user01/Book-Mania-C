import { useLoaderData } from "react-router-dom";
import { getStoredValue } from "../../utility/localstorage";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';


const PagestoRead = () => {

    const getBooks = useLoaderData();
    const storedValue = getStoredValue();

    const getbook = storedValue.map(id => getBooks.find(book => book.bookId === id))

    /* Graph Details */

    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
         C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
         C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
         Z`
    );
    const TriangleBar = (props) => {
        const {
            fill, x, y, width, height,
        } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className="mt-12 overflow-x-auto">

            <BarChart width={600} height={300} data={getbook}>
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} />
            </BarChart>
        </div>
    );
};

export default PagestoRead;