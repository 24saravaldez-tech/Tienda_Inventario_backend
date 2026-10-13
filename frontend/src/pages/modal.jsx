import { useNavigate } from "react-router-dom"
import { apiClient } from "../api/apiClient.js"
import { Modal, Button } from 'react-bootstrap';
import './ConfirmModal.css';

const CustomModal = (onCancel, onEliminar, onEditar, onConfirmar, message, body, cancelText, confirmText) => {

    const handleCancel = () => {
        if (typeof onEliminar === 'function') onEliminar()
        if (typeof onCancel === 'function') onCancel()
        if (typeof onEditar === 'function') onEditar()
    };

    const handleConfirm = () => {
        if (typeof onConfirmar === 'function') onConfirmar();
    };

    return (
        <Modal>
            {/* {closeButton ? (
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
            ) : (
                <Modal.Header className="app-confirm-modal__header">
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
            )} */}

            <Modal.Body>
                <>
                    <p className="app-confirm-modal__message mb-0">{message}</p>
                    {body && <div className="app-confirm-modal__body mt-3">{body}</div>}
                </>

            </Modal.Body>


            <Modal.Footer className="app-confirm-modal__footer">
                {!hideCancel && (
                    <Button type="button" onClick={handleCancel}>
                        {cancelText}
                    </Button>
                )}
                {!hideConfirm && (
                    <Button type="button" onClick={handleConfirm}>
                        {confirmText}
                    </Button>
                )}
            </Modal.Footer>

        </Modal>
    );
};

export default CustomModal;
