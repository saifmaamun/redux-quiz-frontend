import { createSlice } from "@reduxjs/toolkit"

type TInitialState = {
    activeStep:number,
}

const initialState:TInitialState= {
    activeStep:0
}
const stepperSlice =createSlice({
    name: 'stepper',
    initialState,
    reducers:{
        setActiveStep:(state,actions)=>{
            state.activeStep = actions.payload
        }
    }
})

export const{setActiveStep} = stepperSlice.actions;
export default stepperSlice.reducer;