import React from 'react';

class CustomVideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.playerRef = React.createRef();
  }

  componentDidMount() {
    const { videoId } = this.props;
    const player = new window.YT.Player(this.playerRef.current, {
      videoId,
      playerVars: {
        autoplay: 0,
        controls: 1,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
      },
      events: {
        onReady: this.onPlayerReady,
        onStateChange: this.onPlayerStateChange,
      },
    });
    this.player = player;
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.destroy();
    }
  }

  onPlayerReady = (event) => {
    // Do something when the player is ready
  };

  onPlayerStateChange = (event) => {
    // Do something when the player's state changes
  };

  render() {
    return <div ref={this.playerRef} />;
  }
}

export default CustomVideoPlayer;
