import { NavLink } from "react-router-dom"

const Navbar = () => {

    const links = <>
        <li>
            <NavLink to='/' className="border border-[#23BE0A] rounded">Home</NavLink>
        </li>
        <li>
            <NavLink to='/listedBooks' className="border border-[#23BE0A] rounded">Listed Books</NavLink>
        </li>
        <li>
            <NavLink to='/pagesRead' className="border border-[#23BE0A] rounded">Pages to Read</NavLink>
        </li>
    </>

    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52 gap-2">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-3">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <a className="btn bg-[#23BE0A] text-white">Sign In</a>
                    <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;