export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";

export const getCharacterDetail = () => {
    return function(dispatch){
        return fetch('http://localhost:3001/character/')
        .then((response)=> response.json())
        .then((json) => dispatch({ type: GET_CHARACTER_DETAIL, payload: json }))
        .catch((err)=>{
            console.error(err);
        });
    }
};