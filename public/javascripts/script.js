var g, vg;

function submitGraph() {
    var enteredGraph = document.getElementById('vertex-list');
    var selects = document.querySelectorAll('#add-edges select');

    if (!enteredGraph.value || !enteredGraph.value.trim()) {
        clear(enteredGraph);
        return;
    }

    g = new Graph(enteredGraph.value);
    vg = Viva.Graph.graph();
    addNodeVG();

    selects.forEach(function (item) {
        item.length = 0;

        g.vertexList.forEach(function (element) {
            var opt = document.createElement('option');
            opt.innerHTML = element;
            item.appendChild(opt);
        });
    });
}

function addNodeVG() {
    for (var i = 0; i < g.vertices; i++) {
        vg.addNode(i, g[i]);
    }
}

function addOneEdge() {
    var v1 = document.getElementById("firstVert");
    var v2 = document.getElementById("secondVert");
    var valueV1 = v1.options[v1.selectedIndex].value;
    var valueV2 = v2.options[v2.selectedIndex].value;

    g.addEdge(valueV1, valueV2);
    vg.addLink(valueV1, valueV2);
}

function clear(el) {
    el.value = null;
    return;
}

function drowGraph() {
    g.showGraph();

    var renderer = Viva.Graph.View.renderer(vg, {
        container: document.getElementById('graphDiv')
    });
    renderer.run();
}


// g.addEdge(0,1);
// g.addEdge(0,2);
// g.addEdge(1,3);
// g.addEdge(2,4);
// g.bfs(0);


// var vertex = 4;
// var paths = g.pathTo(vertex);
// while (paths.length > 0) {
//     if (paths.length > 1) {
//         console.log(paths.pop() + '-');
//     }
//     else {
//         console.log(paths.pop());
//     }
// }