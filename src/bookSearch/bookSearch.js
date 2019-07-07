import React, { Component } from "react";

import BookSearchList from "../booksearchList/booksearchList";
import DisplayPrintType from "../printType/displayPrintType";
import DisplayBookType from "../bookType/displayBookType";

export default class BookSearch extends Component {
  handleSubmit(event) {
    event.preventDefault();
    alert("submit handled!" + this.state.value);
  }
  render() {
    console.log(this.props.searchResults);
    return (
      <div className="BookSearch">
        <header className="header">
          <h1> Google Book Search</h1>
        </header>

        <form className="googleBookSearch__form" onSubmit={this.handleSubmit}>
          <label className="searchL" htmlFor="search">
            Search:
          </label>
          <input type="text" name="search" id="search" placeholder="henry" />

          <label htmlFor="printType">Print Type:</label>
          <DisplayPrintType
          //changeHandler={event => this.props.changeHandler(event)}
          />

          <label htmlFor="bookType">Book Type:</label>
          <DisplayBookType
          // changeHandler={event => this.props.changeHandler(event)}
          />
        </form>
        {/* **************** BOOK SEARCH RESULTS ***************/}
        <BookSearchList searchResults={this.props.searchResults} />
      </div>
    );
  }
}
