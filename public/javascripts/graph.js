function Graph(vertexList) {
    this.vertexList = vertexList.split(',');
    this.vertices = this.vertexList.length;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.bfs = bfs;
    this.edgeTo = [];
    this.marked = [];
    this.pathTo = pathTo;
    this.hasPathTo = hasPathTo;
    for (var j = 0; j < this.vertices; ++j) {
        this.marked[j] = false;
    }
}

function addEdge(v, w) {
    var indexV = this.vertexList.indexOf(v);
    var indexW = this.vertexList.indexOf(w);
    this.adj[indexV].push(indexW);
    this.adj[indexW].push(indexV);

    console.log('adjd', this.adj);
    this.edges++;
}

function showGraph() {
    var visited = [];
    for (var i = 0; i < this.vertices; ++i) {
        console.log(this.vertexList[i] + " -> ");
        visited.push(this.vertexList[i]);
        for (var j = 0; j < this.vertices; ++j) {
            if ((this.adj[i][j] !== '') && (this.adj[i][j] != undefined)) {
                if (visited.indexOf(this.vertexList[this.adj[i][j]]) < 0) {
                    console.log(this.vertexList[this.adj[i][j]] + ' ');
                }
            }
        }
        visited.pop();
    }
}

function bfs(s) {
    var queue = [];
    var w;
    this.marked[s] = true;
    queue.push(s); // add to back of queue
    while (queue.length > 0) {
        var v = queue.shift(); // remove from front of queue
        if (v !== undefined) {
            console.log("Visited vertex: " + v);
        }
        for (var j = 0; j < this.adj[v].length; ++j) {
            w = this.adj[v][j];
            if (w !== "" && !this.marked[w]) {
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }
}

function pathTo(v) {
    var source = 0;
    if (!this.hasPathTo(v)) {
        return undefined;
    }
    var path = [];
    for (var i = v; i !== source; i = this.edgeTo[i]) {
        path.push(i);
    }
    path.push(source);
    return path;
}

function hasPathTo(v) {
    return this.marked[v];
}
