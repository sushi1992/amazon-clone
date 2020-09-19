export const initialState = {
    cart: [],
    user: null,
    categories: ["Phones", "Laptops"]
}

// Selector - reduce, take what's in the cart, take the price of the item
// and add to the amount, where amount is initially 0. It's a fancy way
// to write a for-loop and return the value
export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            // Logic for adding item to cart
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        
        case 'EMPTY_BASKET':
                return {
                  ...state,
                  cart: []
                }
          
        case 'REMOVE_FROM_CART':
            // Logic for removing item from cart
            // Copy current basket into temp variable
            let newCart = [...state.cart]
            const index = state.cart.findIndex(
                item => item.id === action.payload
            )
            
            // If our index is > or equal to 0, then it found something
            if(index >= 0)
                newCart.splice(index,1)
            else
                console.warn(`Can't remove as it's not in the basket`)
            return {
                ...state, 
                cart: newCart
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export default reducer