import React from 'react'

const BookListComponent = () => {
    const dummyBooks=[
        {
            "bookId":1,
            "name":"Core Java",
            "author":"Nageshar Rao",
            "price":699
        },
        {
            "bookId":2,
            "name":"Web Technology",
            "author":"Santosh Kumar",
            "price":499
        },
        {
            "bookId":3,
            "name":"Java 8",
            "author":"Durga",
            "price":449
        }
    ]
  return (
    <div>
        <h2 className='text-center'>List of Books</h2>
        <table class="table table-dark table-striped">
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
                    dummyBooks.map(book =>
                        <tr key={book.bookId}>
                            <td>{book.bookId}</td>
                            <td>{book.name}</td>
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