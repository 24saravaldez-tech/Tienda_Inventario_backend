const DeleteModal = () => {
    return (
        <>
            <div className="toast theme-primary" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <div className="rounded me-2" alt="..." />
                    <strong className="me-auto">Bootstrap</strong>
                    <small className="opacity-60">2 seconds ago</small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                    This toast is a primary themed toast.
                    <div className="hstack gap-2 mt-2">
                        <button type="button" className="btn-solid btn-sm">Take action</button>
                        <button type="button" className="btn-solid theme-secondary btn-sm" data-bs-dismiss="toast">Close</button>
                    </div>
                </div>
            </div>
        </>
    )
}

const StatusModal = () => {
    return (
        <>
            <div className="toast theme-accent" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <div src="..." className="rounded me-2" alt="..." />
                    <strong className="me-auto">Bootstrap</strong>
                    <small className="opacity-60">2 seconds ago</small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                    This toast is an accent-themed toast.
                    <div className="hstack gap-2 mt-2">
                        <button type="button" className="btn-solid btn-sm">Take action</button>
                        <button type="button" className="btn-solid theme-secondary btn-sm" data-bs-dismiss="toast">Close</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export {DeleteModal, StatusModal}