import React, { useState,useEffect} from 'react'
import { ListOfbooks } from "./BookService";

const BookListComponent = () => {
    const [books, setBooks]= useState([])

    useEffect(() => {
        // here req is variavle passing in lambda
        ListOfbooks().then((req) =>{
            setBooks(req.data);
        }).catch(error => console.error(error));

    },[])
  return (
    <div>
        <h2 className='text-center text-success'>List of Books</h2>
        <table className="table table-dark table-striped table border">
            <thead>
                <tr>
                    <th>BookId</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    books.map(book =>
                        <tr key={book.bookId}>
                            <td>{book.bookId}</td>
                            <td>{book.bookName}</td>
                            <td>{book.author}</td>
                            <td>{book.price}</td>
                        </tr>
                        )
                }
            </tbody>
        </table>
    </div>
  )
}

export default BookListComponent