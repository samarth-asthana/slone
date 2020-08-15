import React, { useState,useEffect } from 'react'
import "./Chat.css";
import {useParams} from "react-router-dom";
import StarBorderOutlineIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "./firebase";

function Chat() {
    const {roomId}=useParams();
    const [roomDetails,setRoomDetails]=useState(null);

    useEffect(()=>{
        if(roomId){
            db.collection('rooms').doc(roomId)
            .onSnapshot(snapshot=>(
                setRoomDetails(snapshot.data())            
            ))
        }
    },[roomId])
    console.log(roomDetails);
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerleft">
                    <h4 className="chat__channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlineIcon />
                    </h4>
                </div>

                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon />Details
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Chat