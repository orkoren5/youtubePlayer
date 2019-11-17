import React from 'react';
import ListItem from "./ListItem";
import "./Playlist.css";

interface PlaylistProps {
    playlist: string[]
    onRemoveVideo: (url: string) => void
}

const Playlist = (props: PlaylistProps) => {
    return <div className="playlist">
        {
            props.playlist.map((item: string, index: number) => <ListItem url={item} key={index} onRemove={() => props.onRemoveVideo(item)}/>)
        }
    </div>
};

export default Playlist;