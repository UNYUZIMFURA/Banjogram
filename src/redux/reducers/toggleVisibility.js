const toggleVisibility = (state = false, action) => {
    switch(action.type) {
       case 'SHOW':
        return true
       case 'HIDE': 
       return false
       default:
        return state
    }
}

export {toggleVisibility}