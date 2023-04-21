import "../styles/preview.scss";



const Preview = () => {
    return (
        <div className="preview">
            <h2>Draft</h2>
            <div className="open">
                <input />
                <p>Openings</p>
            </div>

            <div className="preview-form1">
                <strong>Requistion Details</strong>
                <div className="forms">
                <div>
                    <p>Urgency</p>
                    <input />
                </div>
                <div>
                    <p>Gender</p>
                    <input />
                </div>
                </div>
            </div>
            
            <div className="preview-form2">
                <strong>job Details</strong>
                <div className="forms">
                <div>
                    <p>Title</p>
                    <input />
                </div>
                <div>
                    <p>Details</p>
                    <input />
                </div>
                </div>

                <div className="forms">
                <div>
                    <p>Location</p>
                    <input />
                </div>
                <div>
                    <p>Position</p>
                    <input />
                </div>
                </div>
                
            </div>

            <div className="preview-form3">
                <strong>Interview Settings</strong>
                <div className="forms">
                <div>
                    <p>Duration</p>
                    <input />
                </div>
                <div>
                    <p>Language</p>
                    <input />
                </div>
                </div>
                <div>
                    <p>Mode</p>
                    <input />
                </div>
            </div>

        </div>
    )
}

export default Preview;