import React, { useState, useEffect } from 'react';
import './App.css';
import PlaylistContainer from "./PlaylistContainer";
import YouTube from 'react-youtube';

interface AppState {
    playlist: string[]
}

const initialState: AppState = {
    playlist: []
};

function App() {

    const [state, setState] = useState<AppState>(initialState);

    useEffect(() => {
        fetch("/api/playlist")
            .then(response => response.json())
            .then(res => setState({ playlist: res.playlist }));
    }, []);


    const onAddVideo = (url: string) => {
        fetch(`/api/addVideo?url=${encodeURIComponent(url)}`, { method: "POST"})
            .then(response => response.json())
            .then(res => setState({ playlist: res.playlist }));
    };

    const onRemoveVideo = (url: string) => {
        fetch(`/api/removeVideo?url=${encodeURIComponent(url)}`, { method: "POST"})
            .then(response => response.json())
            .then(res => setState({ playlist: res.playlist }));
    };

    const onVideoEnded = (url: string) => {
        fetch(`/api/videoEnded?url=${encodeURIComponent(url)}`, { method: "POST"})
            .then(response => response.json())
            .then(res => setState({ playlist: res.playlist }));
    };

    const playerOptions = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1 as 1
        }
    };

    const onPlayerReady = (event: any) => {
        console.log(event.target.getDuration());
    };

    return (
        <div className="app">
            <PlaylistContainer
                playlist={state.playlist}
                onAddVideo={(url) => onAddVideo(url)}
                onRemoveVideo={(url) => onRemoveVideo(url)}
            />
            <YouTube
              videoId={state.playlist[0]}
              containerClassName="youtube-player-container"
              className="youtube-player"
              opts={playerOptions}
              onEnd={() => onVideoEnded(state.playlist[0])}
              onReady={onPlayerReady}
            />
      </div>
    );
}

export default App;
