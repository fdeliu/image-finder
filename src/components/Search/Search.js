import React, { Component } from "react";

import ImageResults from "../image-results/ImageResults";
import axios from "axios";

class Search extends Component {
  state = {
    searchText: "",
    amount: 5,
    apiURL: "https://pixabay.com/api",
    apiKey: process.env.REACT_APP_myKey,
    images: []
  };
  onTextChange = event => {
    let inputValue = event.target.value;
    this.setState({ [event.target.name]: inputValue }, () => {
      if (inputValue === "") {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.apiURL}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then(res => this.setState({ images: res.data.hits }))
          .catch(err => console.log(err));
      }
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <p className="text-center my-2">
            <strong>Disclamers:</strong> This application uses Pixabay API
          </p>
          <br />
          <div className="form-group">
            <label>Search for an Image:</label>
            <input
              className="form-control"
              type="text"
              name="searchText"
              onChange={this.onTextChange}
              value={this.state.searchText}
              placeholder="Search Images..."
            />
          </div>
          <div className="form-group">
            <label>Amount:</label>
            <select
              className="form-control"
              onChange={e => this.setState({ amount: e.target.value })}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>
        <ImageResults images={this.state.images} />
      </React.Fragment>
    );
  }
}

export default Search;
