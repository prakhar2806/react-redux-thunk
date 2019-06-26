//action creators

export const loading=()=>{
    return {
        type:"LOADING"
    }
}

export const ageup = (val) => {
console.log("AGE_UP is clicked");
    return {
        type: "AGE_UP",
        value: val
    }
}

export const increaseAge = val =>{
    return dispatch =>{
        dispatch(loading())
        setTimeout(()=>{
            val++;
            dispatch(ageup(val));
        },5000)
    }
}

export const decreaseAge = (val) => {
console.log("AGE_DOWN up is clicked");
    return {
        type: "AGE_DOWN",
        value: val
    }
}