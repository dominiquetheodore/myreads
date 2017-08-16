import React, { Component } from 'react'
import Book from './Book'
import BookShelf from './BookShelf'
import * as BooksAPI from './App'

function ListBooks (props) {
  console.log(props.wantToRead)
  return (
    <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf listType='currentlyReading' onUpdateBook={props.onUpdateBook} books={props.books} shelfTitle='Currently Reading'/>

                <BookShelf listType='wantToRead' onUpdateBook={props.onUpdateBook} books={props.books} shelfTitle='Want to Read'/>

                <BookShelf listType='read' onUpdateBook={props.onUpdateBook} books={props.books} shelfTitle='Read'/>
              </div>
            </div>
            <div className="open-search">
              <a href="/search">Add a book</a>
            </div>
          </div>
  )
}

export default ListBooks