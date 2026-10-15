function Notification({ message, color = 'success', onClose }) {
    if (message) {
        return (
            <div className={`alert alert-${color} d-flex justify-content-between align-items-start`} role="alert">
                <span>{message}</span>
                {onClose && <button type="button" className="btn-close ms-3" aria-label="Cerrar notificación" onClick={onClose} />}
            </div>
        )
    }
}

export { Notification }
