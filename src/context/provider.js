import React, { useState } from 'react'
import Context from './context'

export const Provider = ({ children }) => {

    const [showModal, setShowModal] = useState (false);

    const openModal = () => {
        setShowModal(prev => !prev)
    };


    return (
        <Context.Provider
            value={{
                showModal, 
                setShowModal,
                openModal
            }}
        >
            {children}
        </Context.Provider>
    )
}