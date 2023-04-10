import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {

    // conditional rendering 1
    let message;
    if (cart.length === 0) {
        message = <p>Please add some products</p>
    }
    else {
        message = <div>Thanks you for purchase</div>
    }

    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order Summary: {cart.length}</h2>
            
            {/* conditional css */}
            <p className={`bold bordered ${cart.length === 3 ? 'yellow': 'purple'}`} >Something</p>

                {/* conditional rendering 2 */}
            {
                cart.length > 2
                    ? <span className='purple'>Aro kino</span>
                    : <span>You are fokir</span>
            }
    
            {/* conditional rendering 1 */}
            {message}

            {
                cart.map(tshirt => <p
                    key={tshirt._id}

                >{tshirt.name} <button
                    onClick={() => handleRemoveFromCart(tshirt._id)}
                >X</button></p>)
            }

            {/* conditional rendering 3  */}
            {
                cart.length === 2 && <p>Double Bonanza!</p>
            }

                {/* conditional rendering 4 */}
            {
                cart.length === 3 || <h3>3 Ta to hoilo na</h3>
            }
        </div>
    );
};

export default Cart;

/**
 * CONDITIONAL RENDERING
 * 
 * 1. Use if else to set a variable that will contain an element, components 
 * 2. Ternary operator: condition ? 'for true' : 'false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical || (if the condition is false then the next thing will be displayed)
 * */


/**
 * CONDITIONAL CSS CLASS
 * 
 * 1. use ternary
 * 2. ternary inside template string 
 * 
*/