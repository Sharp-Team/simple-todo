import Todo from './TodoModel'
import User from '../User'
/**
 * Hooks
 */

/**
 * Associations
 */

Todo.belongsTo(User)

export default Todo
