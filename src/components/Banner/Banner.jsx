
const Banner = () => {
    return (
        <div className="mt-4">
            <div className="hero bg-base-200 rounded-xl">
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-36 p-8">
                    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="w-full lg:w-[526px]">
                        <h1 className="text-3xl md:text-5xl font-bold mx-4 my-5">Books to freshen up your bookshelf</h1>
                        <button className="btn bg-[#23BE0A] text-white mx-4 my-4 px-4">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;