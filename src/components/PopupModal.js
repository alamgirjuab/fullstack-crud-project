import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { AiFillPlusCircle } from 'react-icons/ai';
import PopupForm from './PopupForm';

const PopupModal = (props) => {
    const { getData } = props;
    // modal state
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='mt-5'>
            <>
                <Button variant="primary" onClick={handleShow}>
                    <AiFillPlusCircle /> Insert Data
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        {/* <Modal.Title>Modal heading</Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body>
                        <PopupForm handleClose={handleClose} getData={getData} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        {/* <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button> */}
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    );
};

export default PopupModal;