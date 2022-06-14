import { crudControllers } from "./crud-controller";
import { User } from '../models/user-schema'

export default crudControllers(User)