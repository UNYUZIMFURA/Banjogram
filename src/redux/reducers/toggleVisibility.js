const toggleVisibility = (state = false, action) => {
    switch(action.type) {
       case 'SHOW':
        return true
       case 'DECREMENT': 
       return false
       default:
        return state
    }
}

export {toggleVisibility}