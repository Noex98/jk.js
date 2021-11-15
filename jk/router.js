import { handleEffects, handleCleanups} from './tools/UseEffect.js'

export function initRouter(routes) {

    let root = document.getElementById('root')  // Root div

    // Render view in the DOM
    function render(options){

        // useEffect clearnups
        handleCleanups()

        // Mount
        ;(() => {
            let target = routes.find(element => element.path === window.location.pathname)
            if (target === undefined) target = routes[0]

            // Props, argument in views
            let props = {}

            // Extract search param data
            if (location.search){
                try {
                    ;(() => {
                        let params = {}
                        let kv_pairs = location.search.substring(1).split('&')
                        for (let i = 0; i < kv_pairs.length; i++){
                            let x = kv_pairs[i].split('=')
                            params = {...params, [x[0]]: x[1]}
                        }
                        props.search = params
                    })()
                } catch (err) {
                    console.error(err)
                }
            }

            root.innerHTML = target.view(props)
            document.title = target.title
            
            // Scroll to top
            if (options && options.scroll !== false){
                scrollTo(0, 0)
            }
        })()

        // useEffect
        handleEffects()
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
}