//Create Tree Node
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function breadthFirst(root) {
    if (!root) return [];
    // Put the starting node in a queue.
    let queue = [root];
    // While the queue is not empty, repeat steps 3-4.
    while (queue.length) {
        // Dequeue a node and print it.
        let curr = queue.shift();
        console.log(curr.value);

        // Put all of the node's children in the back of the queue.
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
    }

}

// Create Nodes
let rootNode = new TreeNode(1);
rootNode.left = new TreeNode(2);
rootNode.right = new TreeNode(3);
rootNode.left.right = new TreeNode(4);
rootNode.right.left = new TreeNode(5);
rootNode.left.right.right = new TreeNode(6);
rootNode.right.left.left = new TreeNode(7);

//breadthFirst(rootNode);


// Create Adj List
let adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}


function depthFirstGraph(list, start) {
    // Create a queue and push the starting node
    const queue = [start];
    // Create a set to store visited nodes, and add the starting node
    const visited = new Set();
    visited.add(start);
    // While the queue is not empty, repeat steps 4-6
    while (queue.length) {
        // Pop the node on the top of the queue.
        const current = queue.shift();
        // DO THE THING THAT YOU NEED TO DO FOR THE POPPED NODE
        //     For example, add it to a running total, print it, or save it in an array
        console.log(current);
        visited.add(current);
        // For each unvisited neighbor, add it to the visited nodes and to the top of the queue.
        for (const neighbor of list[current]) {
            if (!visited.has(neighbor)) {
                queue.push(neighbor);
                visited.add(neighbor);
            }
        }
    }

}

depthFirstGraph(adjList, 1);
