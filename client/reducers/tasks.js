

function reducer(state = [], action ){
    switch(action.type){
        case 'GET_TASKS':
            return action.tasks
            
        case 'TASK_DELETED':
            return state.filter(task => task.id != action.id)

        case 'BATCH_DELETED':
            // const newState = []
            // state.forEach(task => {
            //    if(!action.ids.includes(task.id)){
            //        newState.push(task)
            //    } 
            // })
            // return newState
            return state.filter(task => !action.ids.includes(task.id))

        case 'TASK_ADDED':
            // const newState = [...state]
            // newState.push(action.task)
            // return newState
            return [...state, action.task]

        case 'TASK_STATUS_UPDATED':
            const newState = [...state]
            const found = newState.find(task => task.id == action.id)
            found.done = action.done
            return newState
        default:
            return state
    }
}

export default reducer