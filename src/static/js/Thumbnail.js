import React, { Component } from 'react'
import $ from 'jquery'
import '../css/Thumbnail.css'

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hovered: false
    };
    this.ratio = 0;
  }

  setPosition(img, container) {
    var self = this;
    let containerWidth = container.width();
    let containerHeight = container.height();
    let width = self.state.hovered ? (self.ratio * containerWidth * 1.3) : containerHeight;
    let newLeft = -((width - containerWidth) / 2);
    let newTop = (self.state.hovered ? -((containerWidth * 1.3 - containerWidth) / 2) : 0)

    img.css({
      left: newLeft + 'px',
      width: width + 'px',
      top: newTop + 'px'
    });
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
        img.css({
          'background-image': 'url(' + self.props.source + ')',
          left: '0px',
          top: '0px'
        });
        self.ratio = image.width() / image.height();
        image.remove();
        self.props.loadCB();
    });

    img.append(image);

    container.hover(
        function() {
            self.setState({hovered: true});
            self.setPosition(img, container);
            self.props.hoverCB(true);
        },
        function() {
            self.setState({hovered: false});
            self.setPosition(img, container);
            self.props.hoverCB(false);
        }
    );

    $(window).resize(function() {
        clearInterval(resizeInterval);
        clearTimeout(resizeTimeout);
        resizeInterval = setInterval(function(){
            self.setPosition(img, container);
        }, 20);

        resizeTimeout = setTimeout(function(){
            clearInterval(resizeInterval);
        }, 700);
    });
  }
}

export default Thumbnail
