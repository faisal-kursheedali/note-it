import { configureStore } from "@reduxjs/toolkit";
import editlable from "./feature/editlable";
import lable from "./feature/lable";

const store= configureStore({
    reducer:{
        lable:lable,
        editLable: editlable
    }
})


export default store