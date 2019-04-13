/**
 * Creates a new object with only spefied keys. Keys must match those that are in the source obj.
 * 
 * @param {object} srcObj the object to be search. Must be initialized.
 * @param {Array} nodesToKeep array of strings. Must be initialized.
 * 
 * @returns the newly created object with only requested nodes.
 */
function pruneObjectTree(srcObj, nodesToKeep) {
  //check if object is null and that there at least one node to keep
  if (srcObj === undefined || srcObj === null || nodesToKeep === undefined || nodesToKeep === null) {
    //if object or nodes to keep are null/undefined exit
    return;
  }


  //delcare prunedObj
  var prunedObj = {};

  //enmumerate thorugh supplied obj
  DFS(srcObj, nodesToKeep, prunedObj);
  //continue until all nodes are explored
  return prunedObj;
}

function DFS(srcObj, search, destObj) {
  for (var prop in srcObj) {

    //to prevent infinte recursion
    if (Array.isArray(srcObj[prop])) {
      //iterate through array if match found add to new object
      const arr = srcObj[prop];

      for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);
        DFS(arr[index], search, destObj);

      }
    } else if (typeof (srcObj) === "object") {

    }
    if (typeof (srcObj[prop]) === "string") {

    }
    if (prop === "0") { return; }
    //check if node has children
    DFS(srcObj[prop], search);

    //check for matches
    for (let i = 0; i < search.length; i++) {
      if (prop === search[i]) {
        destObj[search[i]] = srcObj[prop];
      }
    }
  }
}
