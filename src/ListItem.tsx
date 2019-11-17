import React, {useState} from 'react';
import "./ListItem.css";

interface ListItemProps {
    url: string,
    onRemove: () => void
}


const ListItem = (props: ListItemProps) => {

    return <div className="list-item">
        <span>{props.url}</span>
        <div className="list-item__remove-item" onClick={props.onRemove}/>
    </div>
};

export default ListItem;