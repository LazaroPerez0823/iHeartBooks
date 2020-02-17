import React, { Component } from "react";
import API from './utils/API'
import SearchArea from "./SearchArea";


class Books extends Component {

    constructor(props) {
        super(props);
        this.state= {
            books: [],
            searchField: ""
        }

    }

    // AIzaSyAE2CIuMnHiuUN7XLs9fRiATGN1gD-t0LY


searchBook = (e) => {
    e.preventDefault();
    API.search(e) 
       .then(res => {
          console.log(res);
          this.setState({ books: res.data.items, search: this.state.search })
       })
       .catch(err => err)
 }



handleSearch = (e) => {
    console.log(e.target.value);
    this.setState({ searchField: e.target.value })

}

    render() {
    return (
      <div>
          <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch}/>
      </div>
    );
  }
}

export default Books;



