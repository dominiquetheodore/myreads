import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'
import ListBooks from './ListBooks'
import './App.css'

import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    currentlyReading: [],
    wantToRead: [],
    read: [],
    books: []
  }

  updateShelf = (book, toShelf) => {
    console.log("updating a bookshelf")
    console.log(book)
    console.log(toShelf)
    BooksAPI.update(book, toShelf).then((shelves) => {
        BooksAPI.getAll().then((books) => {
          this.setState({ 
            books: books 
          })
        })
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        console.log(books)
        this.setState({ 
          currentlyReading: books.filter((book)=>book.shelf==="currentlyReading"),
          wantToRead: books.filter((book)=>book.shelf==="wantToRead"),
          read: books.filter((book)=>book.shelf==="read"),
          books: books 
        })
      })
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={()=>
          <ListBooks books={this.state.books} onUpdateBook={this.updateShelf} />
        } />
        <Route path="/search" render={()=>
          <SearchPage books={this.state.books} onUpdateBook={this.updateShelf} />
        } />
      </div>
    )
  }
}

export default BooksApp