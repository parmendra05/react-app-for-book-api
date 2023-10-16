import React, { useState } from 'react'

const BookComponent = () => {
    const [bookName, setBookName] = useState('')
    const [author, setAuthor] = useState('')
    const [price, setPrice] = useState('')

    const saveBook = (book) =>{
        book.preventDefault();
    }

    const book= {bookName,author,price}
    console.log(book)
    return (
        <div className='container'>
            <div className='card'>
                <h2>Add Book</h2>
                <div className="card-body">
                    <form>
                        <div className='form-group mb-2'>
                            <level className='form-level'>Book Name :</level>
                            <input
                            type='text'
                            placeholder='Enter the book name'
                            name='bookNmae'
                            value={bookName}
                            className='form-control' onChange={(e) =>setBookName(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className='form-group mb-2'>
                            <level className='form-level'>Book Author :</level>
                            <input
                            type='text'
                            placeholder='Enter author name'
                            name='author'
                            value={author}
                            className='form-control' onChange={(e) =>setAuthor(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className='form-group mb-2'>
                            <level className='form-level'>Price :</level>
                            <input
                            type='text'
                            placeholder='Enter the book name'
                            name='price'
                            value={price}
                            className='form-control' onChange={(e) =>setPrice(e.target.value)}
                            >
                            </input>
                        </div>
                        <button className='btn btn-success' onClick={saveBook}>Submit </button>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default BookComponent