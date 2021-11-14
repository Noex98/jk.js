import routes from './src/routes.js'
import { handleEffects, handleCleanups} from './tools/UseEffect.js'

export default (() => {

    let root = document.getElementById('root')  // Root div

    // Render view in the DOM
    function render(options){

        // willUnmount triggered
        handleCleanups()

        // Mount
        ;(() => {
            let target = routes.find(element => element.path === window.location.pathname)

            if (target === undefined) target = routes[0]

            root.innerHTML = target.view()
            document.title = target.title
            
            // Scroll to top
            if (options && options.scroll !== false){
                scrollTo(0, 0)
            }
        })()

        // didMount triggered
        handleEffects()
    }

    // Global navigation function
    window.navigateTo = (path, options) => {
        if (path !== location.pathname){
            window.history.pushState(null, null, path)
            console.log(1)
        }
        render(options)
    }

    // Navigating with history api
    onpopstate = () => render()

    // First render
    onload = () => render()
})()