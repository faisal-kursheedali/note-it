import {
    createSlice
} from "@reduxjs/toolkit"

const initialState={
    isEdit:false
}
const editLable = createSlice({
    name: "editLable",
    initialState,
    reducers: {
       changeEdit:(state,action)=>{
        state.isEdit=!state.isEdit
       } 
    }
});

const {changeEdit}=editLable.actions;
export default editLable.reducer;
export {changeEdit}