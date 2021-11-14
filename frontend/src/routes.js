// Route class
import { Route } from '/jk.js'

// Views
import Err404 from './views/Err404/Err404.js'
import Home from './views/Home/Home.js'

const routes = [
    new Route(
        null, // Path
        Err404, // View
        'Error' // Title
    ),
    new Route(
        '/',  // Path
        Home, // View
        'Home' // Title
    ),
]

export default routes