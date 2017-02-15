import React, { Component } from 'react'
import $ from 'jquery'
import './Thumbnail.css'

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hovered: false
    };
    this.width = 0;
  }

  setLeft(img, container) {
    var self = this;
    let width = self.width;
    let containerWidth = container.width();
    let newLeft = -((width * (self.state.hovered ? 1.3 : 1) - containerWidth) / 2);
    img.css('left', newLeft + 'px');
  }

  render() {
    return (
      <div id={this.props.id + "-container"} className="thumbnail-container">
        <div
          id={this.props.id + "-image"}
          className=
            {"thumbnail-image"
            + (this.props.dimIfNotHovered && !this.state.hovered ? " faded" : "")
            + (this.props.doneLoading ? "" : " loading")
            }>
          </div>
      </div>
    )
  }

  componentDidMount() {
    var self = this;
    let img = $('#' + self.props.id + '-image');
    let container = $('#' + self.props.id + '-container');
    let resizeInterval = undefined;
    let resizeTimeout = undefined;

    var image = $("<img>", {class: "temp-image", id: "temp-" + self.props.id, src: self.props.source});

    image.on('load', function(){
        img.css('background-image', 'url(' + self.props.source + ')');
        image.remove();
        let width = self.width = img.width();
        self.setLeft(img, container);
        self.props.loadCB();
    });

    img.append(image);

    container.hover(
        function() {
            self.setState({hovered: true});
            self.setLeft(img, container);
            self.props.hoverCB(true);
        },
        function() {
            self.setState({hovered: false});
            self.setLeft(img, container);
            self.props.hoverCB(false);
        }
    );

    $(window).resize(function() {
        clearInterval(resizeInterval);
        clearTimeout(resizeTimeout);
        resizeInterval = setInterval(function(){
            self.width = img.width() / (self.state.hovered ? 1.3 : 1);
            self.setLeft(img, container);
        }, 10);

        resizeTimeout = setTimeout(function(){
            clearInterval(resizeInterval);
        }, 500);
    });
  }
}

export default Thumbnail
