import React, { useEffect, useState } from "react";
import "../styles/requistion.scss";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setRequistionData} from "../redux/slices/formSlice";

const Requistion = () => {
    const formRef = useRef();
    const dispatch = useDispatch();
    const [data,setData] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
       e.preventDefault();

       const form = formRef.current;
       setData({
        Title: form.Title.value,
        Openings: form.Openings.value,
        Gender: form.Gender.value,
        Urgency: form.Urgency.value
       });
    }

    console.log(data);

    useEffect(() => {
        if(data) {
            dispatch(setRequistionData(data));
        }
    })

    function handleClick() {
        navigate("/job")
      }
    
    return (
        <div className="requistion">
            <h1>Requistion Details</h1>

            <form className="requistion-form" onSubmit={handleSubmit} ref={formRef}>
               <div className="form-div">
               <div>
               <label>Title</label>
               <input name="Title" value={data.Title} required />
               </div>
               <div>
               <label>Openings</label>
               <input name="Openings" value={data.Openings} required />
               </div>
               </div>
              <div className="form-div">
              <div>
               <label>Gender</label>
               <input name="Gender" value={data.Gender} required />
               </div>
               <div>
               <label>Urgency</label>
               <input name="Urgency" value={data.Urgency} required />
               </div>
              </div>
              <button type="submit">Submit</button>
            </form>

            <span>
            <button onClick={handleClick}>Next</button>
            </span>

        </div>
    )
}

export default Requistion;