import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class BookShelf extends React.Component {
  render() {
    return (
    <div className="bookshelf">
	      <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
	      <div className="bookshelf">
	      	<div className="bookshelf-books">
	        	<ol className="books-grid">
	          		{ this.props.books.filter((book)=>book.shelf===this.props.listType).map((book)=> 
	          				<li key={book.id}><Book book={book} onUpdateBook={this.props.onUpdateBook} /></li> 
	          			) 
	          		}
	        </ol>
	      </div>
	    </div>
    </div>
    )
  }
}

export default BookShelf

