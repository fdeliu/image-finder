import React, { Component } from "react";

import ImageResults from "../image-results/ImageResults";
import axios from "axios";


class Search extends Component {
  state = {
    searchText: "",
    amount: 12,
    apiURL: "https://pixabay.com/api",
    apiKey: process.env.REACT_APP_myKey,
    images: [],
    isLoading: false
  };
  componentDidMount(){
       axios
          .get(
            `${this.state.apiURL}/?key=${this.state.apiKey}&q=nature&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then(res => this.setState({ images: res.data.hits }))
          .catch(err => console.log(err));
  }
  onTextChange = event => {
    let inputValue = event.target.value;
    this.setState({ 
      [event.target.name]: inputValue,
      isLoading:true
    }, () => {
      if (inputValue === "") {
        this.setState({ images: [], isLoading:false});
      } else {
        axios
          .get(
            `${this.state.apiURL}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then(res => this.setState({ 
            images: res.data.hits, isLoading:false
          }))
          .catch(err => console.log(err));
      }
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="search">
          <div className="container py-3">
            <div className="row">
              <div className="col-md-8">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="searchText"
                    onChange={this.onTextChange}
                    value={this.state.searchText}
                    placeholder="Search Images..."
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <select
                    className="form-control"
                    onChange={e => this.setState({ amount: e.target.value })}
                    defaultValue={this.state.amount}
                  >
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="48">48</option>
                    <option value="60">60</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      {this.state.images.length === 0 ? (<h2 className="text-center my-3">No images to show</h2>):
        <div style={{paddingBottom:"70px"}}>
        <ImageResults images={this.state.images} isLoading={this.state.isLoading}/>
      </div>
      }
      
      </React.Fragment>
    );
  }
}

export default Search;
