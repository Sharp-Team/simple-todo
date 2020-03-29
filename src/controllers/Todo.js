import { User, Todo } from '@models'

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const getAllTodosCurrentUser = (req, res, next) => {
  if (req.user) {
    return User.findOne({
      where: {
        id: req.user.id,
      },
    })
      .then((user) => {
        return Todo.findAll({
          where: {
            userId: user.id,
          },
        })
      })
      .catch((err) => {
        next(err)
      })
  }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const getTodoById = (req, res, next) => {
  if (req.user) {
    return User.findOne({
      where: {
        id: req.user.id,
      },
    }).then((user) => {
      return Todo.findOne({
        where: {
          userId: user.id,
          id: res.id,
        },
      }).catch((err) => {
        next(err)
      })
    })
  }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const postTodo = (req, res, next) => {
  const { name } = req.body
  console.log(req)

  if (req.user) {
    return User.findOne({
      where: {
        id: req.user.id,
      },
    }).then((user) => {
      if (!user) {
        return 'user not exist'
      }
      return Todo.create({
        userId: user.id,
        name,
      }).catch((err) => next(err))
    })
  }
}

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const putTodoById = (req, res, next) => {}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const deleteTodoById = (req, res, next) => {}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const deleteAllTodos = (req, res, next) => {}
