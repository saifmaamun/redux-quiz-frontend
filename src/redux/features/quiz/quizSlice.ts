import { createSlice } from "@reduxjs/toolkit";



type TQuiz ={
    moduleId:string,
    questions:string,
    description:string,
    options:string[],
    correctOption:string,
    
}

type TInitialState={
    quiz:TQuiz[],
    currentQuestionIndex:number,
}
type TAction={
    payload:TQuiz,
}


const initialState:TInitialState={
quiz:[],
currentQuestionIndex:0,
}

const quizSlice=createSlice({
    name: 'quiz',
    initialState,
    reducers:{
        addQuiz:(state,action:TAction)=>{
            state.quiz.push(action.payload);
        },
        setCurrentQuestionIndex:(state,action)=>{
            state.currentQuestionIndex = action.payload
        }
    }
})

export const {addQuiz,setCurrentQuestionIndex}=quizSlice.actions;
export default quizSlice.reducer;