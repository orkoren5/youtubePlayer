import React, {useState} from 'react';
import "./InsertVideo.css";

interface BuildersContainerProps {
    onAddVideo: (url: string) => void
}

const InsertVideos = (props: BuildersContainerProps) => {

    const [url, setUrl] = useState("");

    const sendUrl = () => props.onAddVideo(url);

    const onKeyPressed = (event: any) => {
        if (event.key === "Enter") {
            sendUrl()
        }
    };

    return <div className="insertion-bar">
        <input className="insertion-input" type="text" onChange={(e) => setUrl(e.target.value)} onKeyPress={onKeyPressed}/>
        <button className="btn-add" onClick={sendUrl}>Add</button>
    </div>
};

export default InsertVideos;