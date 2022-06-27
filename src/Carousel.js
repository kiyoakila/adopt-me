import { Component } from "react";

class Carousel extends Component {
  // the index of the photo that we're showing
  state = {
    active: 0,
  };

  // placeholder for photos inactve. all instances of Carousel share one defaultProps; unmmutable
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  // if not using arrow function, need to bind!!
  handleIndexClick = (event) => {
    this.setState({
      // convert string to number
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
              // HTML data-set
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
