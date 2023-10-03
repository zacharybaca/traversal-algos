//Create Tree Node
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


function depthFirstTree(root) {
    if (!root) return [];
    // Put the starting node on a stack.
    let stack = [root];
    // While the stack is not empty, repeat steps 3-4.
    while (stack.length) {
        // Pop a node and print it.
        let node = stack.pop();
        console.log(node.value);
        // Put all of the node's children on the top of the stack.
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
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

//depthFirstTree(rootNode);

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
    // Create a stack and push the starting node
    const stack = [start];
    // Create a set to store visited nodes, and add the starting node
    const visited = new Set();
    visited.add(start);
    // While the stack is not empty, repeat steps 4-6
    while (stack.length) {
        // Pop the node on the top of the stack.
        const current = stack.pop();
        // DO THE THING THAT YOU NEED TO DO FOR THE POPPED NODE
        //     For example, add it to a running total, print it, or save it in an array
        console.log(current);
        visited.add(current);
        // For each unvisited neighbor, add it to the visited nodes and to the top of the stack.
        for (const neighbor of list[current]) {
            if (!visited.has(neighbor)) {
                stack.push(neighbor);
                visited.add(neighbor);
            }
        }
    }

}

depthFirstGraph(adjList, 1);
