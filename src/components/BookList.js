import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BooksDetails from './BookDetails';

const BookList = (props) => {
    const { books } = useContext(BookContext)
    return books.length ? (
        <div className="book-list">
            <ul>
               { books.map(book => (
                   <BooksDetails book={ book } key={ book.id } />
               )) } 
            </ul>
        </div>
    ) : (
        <div className="empty">No books to read... :)</div>
    );    
}
 
export default BookList;