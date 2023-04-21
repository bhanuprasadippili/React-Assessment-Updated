import "../styles/preview.scss";
import { useSelector } from "react-redux";


const Preview = () => {

    const requisitionState = useSelector(state => state.info);
    console.log(requisitionState);
    const jobState = useSelector(state => state.info);
    console.log(jobState);
    const interviewState = useSelector(state => state.info);
    console.log(interviewState);
    return (
        <div className="preview">
            <h2>Draft</h2>
            <div className="open">
                <input placeholder="Title" name="Title" value={requisitionState.requistionData
.Title} />
                <p>Openings <input value={requisitionState.requistionData.Openings} /></p>
            </div>

            <div className="preview-form1">
                <strong>Requistion Details</strong>
                <div className="forms">
                <div>
                    <p>Urgency</p>
                    <input value={requisitionState.requistionData.Urgency} />
                </div>
                <div>
                    <p>Gender</p>
                    <input value={requisitionState.requistionData.Gender} />
                </div>
                </div>
            </div>
            
            <div className="preview-form2">
                <strong>job Details</strong>
                <div className="forms">
                <div>
                    <p>Title</p>
                    <input value={jobState.jobData.Title} />
                </div>
                <div>
                    <p>Details</p>
                    <input value={jobState.jobData.Details} />
                </div>
                </div>

                <div className="forms">
                <div>
                    <p>Location</p>
                    <input value={jobState.jobData.Location} />
                </div>
                <div>
                    <p>Position</p>
                    <input value={jobState.jobData.Position} />
                </div>
                </div>
                
            </div>

            <div className="preview-form3">
                <strong>Interview Settings</strong>
                <div className="forms">
                <div>
                    <p>Duration</p>
                    <input value={interviewState.interviewData.Duration}/>
                </div>
                <div>
                    <p>Language</p>
                    <input value={interviewState.interviewData.Language} />
                </div>
                </div>
                <div>
                    <p>Mode</p>
                    <input value={interviewState.interviewData.Mode} />
                </div>
            </div>

        </div>
    )
}

export default Preview;