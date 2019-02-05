/* import our actions*/


const initialState = {
    //Determines if user sees userpage or login/registration
    loggedIn: false,
    //Will help prevent multiple requests to server
    loading: false,
    //Purely for fluff. Do not rely on this
    username: '',
    userData: '',
    //addPain will trigger the interactive body map
    addPain: false,
    //How many days worth of data to display; default: 7
    display: 7
}

export default (state = initialState, action) => {
    console.log(action);
    //if(action.type === SOMETHING){return STATE CHANGE}

    return state;
}