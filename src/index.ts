import { Hono } from 'hono'
import {cors} from 'hono/cors'

const app = new Hono()

app.use("/*", cors({
  origin: "https://dekra-forms.pages.dev",
}))

app.get('/', (c) => {
  return c.text('Hello from the other side!')
})

export default app
