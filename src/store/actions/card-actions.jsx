export const ADD ='ADD'
export const DELETE ='DELETE'
export const UPDATE ='UPDATE'

export const add = (obj) => {
    return {
        type: ADD ,
        payload: obj
    }
}

export const deleteCard = (id) => {
    return {
        type: DELETE ,
        payload: id
    }
}

export const updateCard = (obj) => {
    return {
        type: UPDATE ,
        payload: obj
    }
}