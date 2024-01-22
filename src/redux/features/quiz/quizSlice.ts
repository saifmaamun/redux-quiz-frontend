import { createSlice } from "@reduxjs/toolkit";



type TQuiz ={
    moduleId:string,
    questions:string,
    description:string,
    options:string[],
    correctOption:string,
}

type TInitialState={
    quiz:TQuiz[]
}


const initialState:TInitialState={
quiz:[]
}

const quizSlice=createSlice({
    name: 'quiz',
    initialState,
    reducers:{}
})

export const {}=quizSlice.actions;
export default quizSlice.reducer;