import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import updateShelf from './App'

class Book extends React.Component {
  toShelf = (book, toShelf, fromApp) =>
  {
    fromApp(book, toShelf)
  }


  render() {
    console.log(this.props.book)
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select defaultValue={this.props.book.shelf} onChange={(event)=>{this.toShelf(this.props.book, event.target.value, this.props.onUpdateBook)}} >
              <option value="none">Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title} - {this.props.onUpdateBook}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    )
  }
}

export default Book

