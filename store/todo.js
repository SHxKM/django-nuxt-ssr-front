
export const state = () => ({
    todos: []
})

export const getters = {
    todos(state) {
        return state.todos
    },
    todos_counter: (state) => {
        return state.todos.length
    }
}

export const mutations = {
    SET_TODOS(state, toDoItems) {
        state.todos = toDoItems
    },
    REMOVE_TODO(state, toDoItem) {
        state.todos = state.todos.filter(el => el.id !== toDoItem.id)
    },
    ADD_TODO(state, toDoItem) {
        state.todos.unshift(toDoItem)
    }
}

export const actions = {
    async getToDos(context) {
        const res = await this.$axios.get('todos/')
        if (!res.error) {
            context.commit("SET_TODOS", res.data)
        } else {
            context.commit("SET_TODOS", [])
        }
    },
    deleteToDoItem(context, toDoItemId) {
        return this.$axios.delete(`todos/${toDoItemId}`)
            .then(response => context.commit('REMOVE_TODO', response.data)).catch(function (e) {
                throw e
            })
    },

    CreateToDoItem(context, payload) {
        return this.$axios.post(`todos/`, payload).then(response => context.commit('ADD_TODO', response.data))
    }
}
