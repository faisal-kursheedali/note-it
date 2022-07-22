import {
    createSlice
} from "@reduxjs/toolkit"
import {
    v4 as uuidv4
} from 'uuid'
const initialState = [{
    lableId: uuidv4(),
    lableTitle: "home work",
    lableCard: [{
            cardId: uuidv4(),
            cardTitle: "about H2o",
            cardNote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam doloremque aspernatur, harum libero nobis maiores consequatur recusandae beatae itaque, dicta dolorum est quisquam praesentium provident. Explicabo earum iusto optio."
        },
        {
            cardId: uuidv4(),
            cardTitle: "about H2o",
            cardNote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam doloremque aspernatur, harum libero nobis maiores consequatur recusandae beatae itaque, dicta dolorum est quisquam praesentium provident. Explicabo earum iusto optio."
        },
        {
            cardId: uuidv4(),
            cardTitle: "about H2o",
            cardNote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam doloremque aspernatur, harum libero nobis maiores consequatur recusandae beatae itaque, dicta dolorum est quisquam praesentium provident. Explicabo earum iusto optio."
        },
        {
            cardId: uuidv4(),
            cardTitle: "about H2o",
            cardNote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam doloremque aspernatur, harum libero nobis maiores consequatur recusandae beatae itaque, dicta dolorum est quisquam praesentium provident. Explicabo earum iusto optio."
        },
        {
            cardId: uuidv4(),
            cardTitle: "about H2o",
            cardNote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam doloremque aspernatur, harum libero nobis maiores consequatur recusandae beatae itaque, dicta dolorum est quisquam praesentium provident. Explicabo earum iusto optio."
        },
        {
            cardId: uuidv4(),
            cardTitle: "about H2o",
            cardNote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam doloremque aspernatur, harum libero nobis maiores consequatur recusandae beatae itaque, dicta dolorum est quisquam praesentium provident. Explicabo earum iusto optio."
        },
        {
            cardId: uuidv4(),
            cardTitle: "about H2o",
            cardNote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam doloremque aspernatur, harum libero nobis maiores consequatur recusandae beatae itaque, dicta dolorum est quisquam praesentium provident. Explicabo earum iusto optio."
        }
    ]
}, {
    lableId: uuidv4(),
    lableTitle: "collage work",
    lableCard: [{
            cardId: uuidv4(),
            cardTitle: "about H2o",
            cardNote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam doloremque aspernatur, harum libero nobis maiores consequatur recusandae beatae itaque, dicta dolorum est quisquam praesentium provident. Explicabo earum iusto optio."
        },
        {
            cardId: uuidv4(),
            cardTitle: "about H2o",
            cardNote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam doloremque aspernatur, harum libero nobis maiores consequatur recusandae beatae itaque, dicta dolorum est quisquam praesentium provident. Explicabo earum iusto optio."
        },
        {
            cardId: uuidv4(),
            cardTitle: "about H2o",
            cardNote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam doloremque aspernatur, harum libero nobis maiores consequatur recusandae beatae itaque, dicta dolorum est quisquam praesentium provident. Explicabo earum iusto optio."
        },
        {
            cardId: uuidv4(),
            cardTitle: "about H2o",
            cardNote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam doloremque aspernatur, harum libero nobis maiores consequatur recusandae beatae itaque, dicta dolorum est quisquam praesentium provident. Explicabo earum iusto optio."
        },
        {
            cardId: uuidv4(),
            cardTitle: "about H2o",
            cardNote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam doloremque aspernatur, harum libero nobis maiores consequatur recusandae beatae itaque, dicta dolorum est quisquam praesentium provident. Explicabo earum iusto optio."
        },
        {
            cardId: uuidv4(),
            cardTitle: "about H2o",
            cardNote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam doloremque aspernatur, harum libero nobis maiores consequatur recusandae beatae itaque, dicta dolorum est quisquam praesentium provident. Explicabo earum iusto optio."
        },
        {
            cardId: uuidv4(),
            cardTitle: "about H2o",
            cardNote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam doloremque aspernatur, harum libero nobis maiores consequatur recusandae beatae itaque, dicta dolorum est quisquam praesentium provident. Explicabo earum iusto optio."
        }
    ]
}]
const lable = createSlice({
    name: "lable",
    initialState,
    reducers: {

    }
});

// const {}=lable.actions;
export default lable.reducer;
// export {}