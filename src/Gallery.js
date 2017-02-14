import React, { Component } from 'react'
import $ from 'jquery'
import './Gallery.css'
import Thumbnail from './Thumbnail'

class Gallery extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loaded: false,
      hovered: false
    };
  }

  render () {
    var self = this;
    var id = 0
    var urls = [
      'https://c1.staticflickr.com/1/645/31588116185_aeb7099321_b.jpg',
      'https://c1.staticflickr.com/9/8243/29157320573_a9c3bd0a6c_b.jpg',
      'https://c1.staticflickr.com/9/8513/29490542420_f5204bfa16_b.jpg',
      'https://c1.staticflickr.com/9/8249/29490541260_bc9659d128_b.jpg',
      'https://c1.staticflickr.com/9/8344/29296407616_9260b80090_b.jpg',
      'https://c2.staticflickr.com/2/1466/26661002642_323c77bac1_b.jpg',
      'https://c2.staticflickr.com/6/5766/21613825136_2d420eea87_b.jpg',
      'https://c2.staticflickr.com/4/3722/9595823130_1151f329ff_b.jpg',
      'https://c1.staticflickr.com/9/8673/15746470077_5c3b56f2a6_b.jpg',
      'https://c2.staticflickr.com/4/3840/14857392976_ed2bbc4fd3_b.jpg',
      'https://c1.staticflickr.com/9/8453/7974435966_8ddc099325_b.jpg',
      'https://c2.staticflickr.com/2/1672/26010805751_b770e524c3_b.jpg',
      'https://c2.staticflickr.com/8/7584/16661103308_6b16aae0f4_b.jpg',
      'https://c1.staticflickr.com/9/8035/8041518542_e80ee9dd97_b.jpg',
      'https://c2.staticflickr.com/4/3703/11571125555_14d57ef4dc_b.jpg',
      'https://c2.staticflickr.com/8/7285/8736364793_acb55d6b88_b.jpg'
    ]
    var loadedCount = 0;
    var hoveredCount = 0;

    var loadCallback = function () {
      loadedCount++;
      console.log('load callback: ' + loadedCount);
      if (loadedCount >= urls.length) {
        self.setState({loaded: true});
        $("#loading-blocker").css('pointer-events', 'auto');
      }
    }

    var hoverCallback = function (hovered) {
      if (hovered) {
        hoveredCount++;
      } else {
        hoveredCount--;
      }

      self.setState({hovered: (hoveredCount > 0)})
    }

    var thumbsList = urls.map(function (url) {
      let nextId = id++;
      return <Thumbnail
        key={'thumb' + nextId}
        id={'thumb' + nextId}
        source={url}
        loadCB={loadCallback}
        hoverCB={hoverCallback}
        doneLoading={self.state.loaded}
        dimIfNotHovered={self.state.hovered}
      />
    })

    return (
      <div id="gallery">
        <div id="loading-blocker">
        <div className="gallery-row">
          { thumbsList.slice(0,4) }
        </div>
        <div className="gallery-row">
          { thumbsList.slice(4,8) }
        </div>
        <div className="gallery-row">
          { thumbsList.slice(8,12) }
        </div>
        <div className="gallery-row">
          { thumbsList.slice(12,16) }
        </div>
        </div>

      </div>
    )
  }
}

export default Gallery
