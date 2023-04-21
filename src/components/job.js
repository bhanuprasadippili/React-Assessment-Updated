import React, { useEffect, useState } from "react";
import "../styles/job.scss";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setJobData} from "../redux/slices/formSlice";


const Job = () => {


    const formRef = useRef();
    const dispatch = useDispatch();
    const [data,setData] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
       e.preventDefault();

       const form = formRef.current;
       setData({
        Title: form.Title.value,
        Details: form.Details.value,
        Location: form.Location.value,
        Position: form.Position.value
       });
    }

    console.log(data);

    useEffect(() => {
        if(data) {
            dispatch(setJobData(data));
        }
    })

    function handleClick1() {
        navigate("/")
      }


      
    function handleClick2() {
        navigate("/interview")
      }


    return (
        <div className="job">
            <h1>Job Details</h1>

            <form onSubmit={handleSubmit} ref={formRef}>
               <div>
               <label>Title</label>
               <input name="Title" value={data.Title} required />
               </div>
               <div>
               <label>Details</label>
               <input name="Details" value={data.Details} required />
               </div>
               <div>
               <label>Location</label>
               <input name="Location" value={data.Location} required />
               </div>
               <div>
               <label>Position</label>
               <input name="Position" value={data.Position} required />
               </div>
               <button type="submit">Submit</button>

                
            </form>

            <span>
                <button onClick={handleClick1}>Previous</button>
                <button onClick={handleClick2}>Next</button>
            </span>
        </div>
    )
}

export default Job;