
export const addNote=(note)=>{
    return{
        type:"addNote",
        payload:note
    }
}

export const delNote=(i)=>{
    return{
        type:"delNote",
        payload:i
    }
}
