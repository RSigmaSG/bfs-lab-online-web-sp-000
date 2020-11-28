function bfs(rootNode, vertices, edges){

  rootNode = vertices[0]
  let queue = []
  let visited = []
  
  rootNode.distance = 0
  
  queue.push(rootNode)
  console.log(queue)
  while(queue !== null)
  {
    //console.log("here")
    let firstNode = queue.shift()
    let adjacentVertices = findAdjacent(firstNode, vertices, edges)
    //console.log("here")
    
    markDistanceAndPredecessor(firstNode, adjacentVertices)
    
    console.log(adjacentVertices)
    addTo(adjacentVertices, queue)  
    visited.push(firstNode)
    break
  }
  return visited

}

function findAdjacent(node, vertices, edges)
{
  
  var adjArray = []
  var foundNode
  var adjObj
  
  //console.log (`\n\n\n\n NEW TEST`, vertices)
      
  for (var i = 0; i < edges.length; i++)
  {

    if (edges[i][0] === node )
    {
      adjObj = getObj(vertices, edges[i][1]) 
      if(adjObj.distance === null)
      {
        adjArray.push(adjObj);
      }
    }
    else if (edges[i][1] === node)
    {
      adjObj = getObj(vertices, edges[i][0]) 
      if(adjObj.distance === null)
      {
        adjArray.push(adjObj);
      }
    }
  }
  console.log(adjArray)
  return adjArray
  
}

function getObj(vertices, name)
{
  //console.log (vertices, name)
  //console.log (vertices.find(element => (element.name === name)));
  return vertices.find(element => (element.name === name));
  
}

function markDistanceAndPredecessor(vertex, vertices)
{
  //console.log(vertices)
  for( var i = 0; i < vertices.length; i++)
  {
    vertices[i].distance = vertex.distance + 1;
    vertices[i].predecessor = vertex;
  }
  //console.log(vertices)
  return vertices;
  
}

function addTo(vertices, list)
{
  console.log(vertices)
  for (var i = 0; i < vertices.length; i++)
  {
    list.push(vertices[i])
  }
  
}