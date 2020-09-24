import React from 'react'
import { connect } from 'react-redux'
import { _ } from 'underscore'
import { toggleTodo } from '../actions'

const Todo = ({ todo, id, toggleTodo }) => (
    <li className={todo.completed ? 'completed' : ''} onClick={() => toggleTodo(id)}>{todo.content}</li>
)

function TodoList({ todos, toggleTodo }) {
    return (
        _.keys(todos).map((id) => (
            <Todo key={id} id={id} toggleTodo={toggleTodo} todo={todos[id]} />
        ))
    )
}

const mapState = (state) => {
    if (state.Detail.activeFilter === 'all') {
        return { todos: state.todos.data }
    } else if (state.Detail.activeFilter === 'completed') {
        return ({
            todos: _.pick(state.todos.data, (todo) => todo.completed)
        })
    } else {
        return ({
            todos: _.pick(state.todos.data, (todo) => !todo.completed)
        })
    }
}

export default connect(mapState, { toggleTodo })(TodoList);
