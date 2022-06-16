import { crudControllers } from "./crud-controller.js";
import { User } from '../models/user-schema.js'

export default crudControllers(User)