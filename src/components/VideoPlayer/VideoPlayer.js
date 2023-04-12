import React, { useEffect } from 'react';

const VideoPlayer = ({ videoId }) => {
  useEffect(() => {
    const player = new window.YT.Player('player', {
      height: '360',
      width: '640',
      videoId,
      playerVars: {
        controls: 0,
        showinfo: 0,
        modestbranding: 1,
        iv_load_policy: 3,
        disablekb: 1,
        rel: 0
      },
        events: {
            onReady: (event) => {
                const logo = event.target.getIframe().contentDocument.querySelector('.ytp-chrome-top .ytp-logo');
                if (logo) {
                  logo.addEventListener('click', (e) => {
                    e.preventDefault();
                  });
                }}
        },
      });
  
      function onPlayerReady(event) {
        // Disable the YouTube logo
        event.target.setOption('showInfo', 0);
        
        // Disable the share button
        event.target.setOption('enableShareButton', false);
        
        // Disable the title display
        event.target.setOption('showTitle', false);
      }
    }, [videoId]);
  
    return <div id="player"></div>;
  };
  
  export default VideoPlayer;