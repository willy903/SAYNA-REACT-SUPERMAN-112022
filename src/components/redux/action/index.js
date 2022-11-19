//Ajout product dans le card

export const addCart = (product) => {
    return{
        type: "ADDITEM",
        payload : product
    }
}

//suppression item from cart
export const supprCart = (product) => {
    return{
        type: "ADDITEM",
        payload : product
    }
}