export default function Modal (props: any) {
    const handleClose = () => {
        props.setShow(false);
        props.setShowForm(true);
    };

    return <div className="messageModal">
            <div className="text-center mb-4">
                Thank you for your message!
                <br/>
                I will reply to you soon!
            </div>
        <button className="btn btn-secondary d-block m-auto" onClick={handleClose}>
            Close
        </button>
    </div>
}