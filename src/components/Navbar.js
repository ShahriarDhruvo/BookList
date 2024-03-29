import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext);

    return (
        <div className="navbar">
            <h1>Ninja Hattori Reading....</h1>
            <p>Currently you have { books.length } to read....</p>
        </div>
    );
}
 
export default Navbar;