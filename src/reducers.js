
const initialTodoState = {
    nextId: 2,
    data:
    {
        1: {
            content: 'Content 1',
            completed: false
        }
    }
}

export const todos = (state = initialTodoState, action) => {
    switch (action.type) {
        case "ADD_TODO": {
            return (
                {
                    ...state,
                    data: {
                        ...state.data,
                        [state.nextId]: {
                            completed: false,
                            content: action.payload.content
                        },
                    },

                    nextId: state.nextId + 1
                }
            )
        }
        case "TOGGLE_TODO":{
            return(
                {
                    ...state,
                    data:{
                        ...state.data,
                        [action.payload.id]:{
                            ...state.data[action.payload.id],
                            completed: !(state.data[action.payload.id].completed)
                        }
                    }
                }
            )
        }

        default: {
            return state
        }
    }
}


export const Detail = (state = {activeFilter: 'all'}, action) => {
    switch (action.type) {
        case "SET_FILTER": {
            return ({
                activeFilter: action.payload.filter
            })
        }

        default: {
            return state;
        }
    }
}
