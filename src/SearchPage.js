import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import DebounceInput from 'react-debounce-input';

class SearchPage extends React.Component {
	state = {
		query: '',
		showBooks: []
	}

	updateQuery = (query) => {
		this.setState({ query: query.trim() })
		let showBooks

	  	if (query !== '') {
			BooksAPI.search(this.state.query, 5).then((books) => {
				books.map((book)=>
					{
						// check if book is already on shelf and set correct shelf property
						const alreadyOnShelf = this.props.books.find(ownedBook => ownedBook.id === book.id);
						if (alreadyOnShelf) {
							book.shelf = alreadyOnShelf.shelf
						}
						else
						{
							book.shelf = "none"
						}
					}
				)
				this.setState({showBooks : books})
			})
		}
	} 


	render () {
	    return(
	  	<div className="search-books">
	  		<div className="search-books-bar">
		      <a className="close-search" href="/">Close</a>
	  			<div className="search-books-input-wrapper">
        		<DebounceInput
		          minLength={2}
		          debounceTimeout={300} value={this.state.query}
		          onChange={(event) => this.updateQuery(event.target.value)} />
	 			</div>
	 		</div>
        	
        	<div className="search-books-results">
		      <ol className="books-grid">
		      	{ 
		      		this.state.showBooks
                  		.map((book)=> <li key={book.id}><Book onUpdateBook={this.props.onUpdateBook} book={book} /></li> ) 
                }
		      </ol>
		    </div>
      	</div>

	)}
}

export default SearchPage