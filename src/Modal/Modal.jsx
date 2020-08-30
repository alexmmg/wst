import React, {useState} from 'react'
import SimpleReactFileUpload from "../FileUploadNew";


const Modal = () => {
    const [modalState, setModalState] = useState(false);

    const toggleModalState = () => {
        setModalState(!modalState)
    };

    return (
            <div className={`modalBackground modalShowing-${modalState}`}>
                <div className="modalInner">
                    <div className="modalImage">
                        <img
                            src="https://images.unsplash.com/photo-1586931775007-ad3c3913f216?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
                            alt="modal pic"
                        />
                    </div>
                    <div className="modalText">
                        <SimpleReactFileUpload />
                        <button className="exitButton" onClick={() => toggleModalState()}>
                            exit
                        </button>
                    </div>
                </div>
                <button onClick={() => toggleModalState()}>Open modal</button>
            </div>
    )
};

export default Modal;