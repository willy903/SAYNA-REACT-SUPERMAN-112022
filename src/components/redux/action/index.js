//Ajout product dans le card

export const addCart = (Product) => {
    return{
        type: "ADDITEM",
        payload : Product
    }
}

//suppression item from cart
export const supprCart = (Product) => {
    return{
        type: "DELITEM",
        payload : Product
    }
}

//Ajout membre
export const registerUser = (user) => {
    return{
        type: "REGISTER",
        payload : user
    }
}

//login
export const login = (user) => {
    return{
        type: "LOGIN",
        payload : user
    }
}