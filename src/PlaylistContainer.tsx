import React, {useState} from 'react';
import InsertVideos from "./InsertVideos";
import Playlist from "./Playlist";

interface PlaylistContainerProps {
    onAddVideo: (url: string) => void,
    onRemoveVideo: (url: string) => void,
    playlist: string[]
}

const PlaylistContainer = (props: PlaylistContainerProps) => {

    return <div className="playlist-container">
        <InsertVideos onAddVideo={props.onAddVideo}/>
        <Playlist playlist={props.playlist} onRemoveVideo={props.onRemoveVideo}/>
    </div>
};

export default PlaylistContainer;