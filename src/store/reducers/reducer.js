const initialState = {
    age: 21,
    history: []
}
//es6 provide default value like if state is not set it is set to initial state
const reducer = (state = initialState, action) => {

    const newState = { ...state }; //spread operator;
    switch (action.type) {
        case "AGE_UP":
            return {
                ...state,
                age: state.age + action.value,
                // concat to immutate the array for adding
                history: state.history.concat({ id: Math.random(), age: state.age + action.value }),
                loading:false
            }
        // newState.age += action.value;

        case "AGE_DOWN":
            return {
                ...state,
                age: state.age - action.value,
                history: state.history.concat({ id: Math.random(), age: state.age - action.value })
            }
        // newState.age -= action.value;
        case "DEL_ITEM":
            return {
                ...state,
                // filter to immutate the array for removing
                history: state.history.filter(ele => (ele.id !== action.key))
            }
        // newState.age -= action.value;
        case "LOADING":
            newState.loading = true;
    }

    return newState;
}

export default reducer