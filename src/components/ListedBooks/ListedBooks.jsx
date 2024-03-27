import { useState } from "react";
import {Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
    const [selectTabs, setSelectTabs ] = useState(1)

    const handleTabs= index =>{
        setSelectTabs(index);
    }

    return (
        <div className="container mx-auto">
            <div>
                <div className="text-center bg-secondary-content mt-4 py-4">
                    <h3 className="text-xl lg:text-2xl font-bold">Books</h3>
                </div>
                <div className="text-center mt-6">
                    <details className="dropdown ">
                        <summary className="m-1 btn">Sort By: <span className="rotate-90">{'>'}</span></summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li>lasla</li>
                        </ul>
                    </details>
                </div>
            </div>

            {/* 
                !IMPORTANT

                after visiting the Listed Book page click "Read Books" button/ header to see the read book list
            
            */}

            <div className="mt-6">
                <div role="tablist" className="tabs tabs-lifted">
                    <div role="tab" className={selectTabs === 1 ? 'tab tab-active' : 'tab' } onClick={()=> handleTabs(1)}><Link to='/listedBooks/readBooks'>Read Books</Link></div>

                    <div role="tab" className={selectTabs === 2 ? 'tab tab-active' : 'tab' } onClick={()=> handleTabs(2)}><Link to='/listedBooks/wishlistBooks'>Wish List</Link></div>
                </div>

                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;