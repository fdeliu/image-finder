import React, { Component } from "react";
import loading from '../../img/loading.gif';

class ImageResults extends Component {
  render() {
    if(this.props.isLoading){
      return(
        <div className="text-center my-3">
            <h3>Getting Images...</h3>
            <img src={loading} alt="loading-image"/>
        </div>
      )
    }
    return (
      <div className="container-fluid">
        <div className="row text-center">
          {this.props.images.map(image => (
            <a
              href={image.largeImageURL}
              key={Math.random()}
              data-toggle="lightbox"
              data-gallery="gallery"
              className="col-md-4 py-3"
            >
              <img
                src={image.largeImageURL}
                key={image.id}
                style={imageStyle}
                alt={image.tags}
                className="img-fluid"
              />
            </a>
          ))}
        </div>
      </div>
    );
  }
}
const imageStyle = {
  width: "22rem",
  height: "18rem"
};
export default ImageResults;
