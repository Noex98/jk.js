export class Route {
    constructor(path, view, title){
        this.path = path
        this.view = view
        this.title = title
        this.state = {}
        this.effects = {}
    }
}