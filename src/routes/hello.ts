import Joi
  from 'joi'

const schema = Joi.object({
  result: Joi.string()
             .required(),
})

export default function hello(router: Foxx.Router): Foxx.Router {
  router
  .get('/hello', (_req: Foxx.Request, res: Foxx.Response) => {
    const result: string = 'Hello World!'

    res.send({ result })
  })
  .response(200,
    schema,
  )
  .summary('Returns hello world')
  .description('Example route that sends hello world message')

  return router
}