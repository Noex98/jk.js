import routes from './src/routes.js'
import { handleWillUnmount, handleDidMount} from './tools/Lifecycle.js'

export default (() => {

    let root = document.getElementById('root')  // Root div

    // Render view in the DOM
    function render(options){

        // willUnmount triggered
        handleWillUnmount()

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
        handleDidMount()
    }

    // Global navigation function
    window.navigateTo = (path, options) => {
        if (path !== location.pathname){
            window.history.pushState(null, null, path)
        }
        render(options)
    }

    // Navigating with history api
    onpopstate = () => render()

    // First render
    onload = () => render()
})()