import User from './UserModel'
import Todo from '../Todo/TodoModel'
import { hashPassword } from '@libs/handlePassword'
/**
 * Hooks
 */

User.addHook('beforeUpdate', (user, option) => {
  // After user change password => Hash password again!
  if (!user.changed('passwordHash')) return
  return hashPassword(user.passwordHash)
})

/**
 * Associations
 */

User.hasMany(Todo)

export default User
