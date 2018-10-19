import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li key={book.title} 
          className='list-group-item'
          onClick={() => this.props.selectBook(book)}
          >
          {book.title}
        </li>
        )
      });
    }

    render(){
      return (
        <ul className='list-group col-sm-4'>
        {this.renderList()}
        </ul>
      )
    }
  }

  function mapStateToProps(state){
    // the object return from this function will show up as Props inside of booklist

    return {
      books: state.books
    }
  }

// anything returned from the function will become props of the booklist container.
function mapDispatchToProps(dispatch){
    // whenever a selectbook is called, the result should be passed to all reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
  }

// promote booklst from a component to a container; it needs to know about the new dispatch method, select book; make
// it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

