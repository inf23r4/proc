import React, { useContext } from 'react'
import "./cover.css"
import coverVideo from "../media/coverVideo.mp4"
import Context from '../context/context'
import { PicsModal } from './modal'

function Cover() {

    const { showModal, setShowModal,} = useContext(Context)

    return (
        <div className="cover-container">
            <video className="Video" src={ coverVideo } autoPlay loop muted />
            <h1>INFQ</h1>
            <p>Photographs</p>
            <PicsModal showModal={showModal} setShowModal={setShowModal}/>
        </div>
    )
}

export default Cover;
