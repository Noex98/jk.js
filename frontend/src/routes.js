// Route class
import { Route } from '/jk.js'

// Views
import Err404 from './views/Err404/Err404.js'
import Home from './views/Home/Home.js'

const routes = [
    /*{
        view: Err404,
        title: '404 Error',
        state: {}
    }, {
        path: '/',
        view: Home,
        title: 'Home',
        state: {},
        effects: {}
    }*/
    new Route('', Err404, 'Error'),
    new Route('/', Home, 'Home')
]

export default routes