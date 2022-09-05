const initialState=["Welcome! Create your first note."];

const update=(state=initialState,action)=>{
    switch(action.type){
        case "addNote":return [action.payload,...state];
        case "delNote":    
        return state.filter((val,i)=>{
            return i!==action.payload;
    });
    default: return state;
}
}

export default update;
