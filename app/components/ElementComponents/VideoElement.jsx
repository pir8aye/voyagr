import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import shouldPureComponentUpdate from '../utils/shouldPureComponentUpdate'
import { DefaultPlayer as Video } from 'react-html5video'

class VideoElement extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate

  render() {
    return (
      <Video
          value={this.props.id}
          type={this.props.type}
          className={`element-size-${this.props.size}`}
          autoPlay
          muted
          controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
          >
        <source src={this.props.source} />
        <track label="English" kind="subtitles" srcLang="en" default />
      </Video>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, null)(VideoElement)
