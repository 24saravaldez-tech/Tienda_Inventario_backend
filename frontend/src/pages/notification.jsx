const notification = (message, color) => {
    return (
        <>
            <div class="alert theme-accent" role="alert">
                <p>A simple accent alert—check it out!</p>
            </div>
            <div class="alert theme-success" role="alert">
                <p>A simple success alert—check it out!</p>
            </div>
            <div class="alert theme-danger" role="alert">
                <p>A simple danger alert—check it out!</p>
            </div>
        </>
    )
}

export { notification }