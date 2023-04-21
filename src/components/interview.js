import "../styles/interview.scss";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setInterviewData} from "../redux/slices/formSlice";


const Interview = () => {


    const formRef = useRef();
    const dispatch = useDispatch();
    const [data,setData] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
       e.preventDefault();

       const form = formRef.current;
       setData({
        Mode: form.Mode.value,
        Duration: form.Duration.value,
        Language: form.Language.value,
       });

       alert("Successfully Submitted")
    }

    console.log(data);

    useEffect(() => {
        if(data) {
            dispatch(setInterviewData(data));
        }
    })

    function handleClick() {
        navigate("/job")
      }
    


    return (
        <div className="interview">
            <h1>Interview Details</h1>

            <form  onSubmit={handleSubmit} ref={formRef}>
               <div>
               <label>Mode</label>
               <input name="Mode" value={data.Mode} required />
               </div>
               <div>
               <label>Duration</label>
               <input name="Duration" value={data.Duration} required />
               </div>
               <div>
               <label>Language</label>
               <input name="Language" value={data.Language} required />
               </div>      
               <button type="submit">Submit</button>

            </form>

            <span>
            <button onClick={handleClick}>Previous</button>
            </span>
        </div>
    )
}

export default Interview;