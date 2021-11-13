// Views
import Err404 from './views/Err404/Err404.js'
import Home from './views/Home/Home.js'

const routes = [
    {
        view: Err404,
        title: '404 Error'
    }, {
        path: '/',
        view: Home,
        title: 'Home'
    }
]

export default routes