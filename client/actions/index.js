import request from 'superagent'

export const setTasks = ( todos ) => {
    return {
        type: 'SET_TASKS',
        todos: todos
    }
}

export const deleteTask = () => {
    return {
        type: 'DESTROY_TASK',
        id: id
    }
}

export function getTasks () {
    return dispatch => {
        return request
        .get('api/v1/todos')
        .then( res => {
            return dispatch(setTasks(res.body))
        })
        .catch( err => {
            console.log( err )
        })
    }
}

export const addTask = ( task ) => {
    return dispatch => {
        return request
        .post( 'api/v1/todos' )
        .send( task )
        .then( () => dispatch( getTasks() ))
        .catch( err => console.log( err ))
    }
}

export const destroyTask = ( id ) => {
    return dispatch => {
        return request
        .delete( 'api/v1/todos/' + id )
        .then( () => dispatch( getTasks() ))
        .catch( err => console.log( err ))
    }
}