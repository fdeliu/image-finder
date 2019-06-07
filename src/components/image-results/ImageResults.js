import React, { Component } from "react";

class ImageResults extends Component {
  render() {
    return (
      <div className="container">
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
                className="img-fluid rounded"
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
