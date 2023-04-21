import { createSlice } from "@reduxjs/toolkit";


const FormSlice = createSlice({
    name: "Form Details",
    initialState: {
       requistionData: {},
       jobData: {},
       interviewData: {}
    },
    reducers: {
        setRequistionData: (state, action) => {
            state.requistionData = action.payload;
          
        },

        setJobData: (state, action) => {
            state.jobData = action.payload;
         
        },
        setInterviewData: (state, action) => {
            state.interviewData = action.payload;
          
        }
    }

})


export const { setRequistionData, setJobData, setInterviewData } = FormSlice.actions;
export default FormSlice;
