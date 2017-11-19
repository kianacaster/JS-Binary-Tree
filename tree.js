class Tree
{
	constructor()
	{
		this.root;
		this.totalNodes = 0;
	}
}

Tree.prototype.addNode = function(value){
	this.totalNodes++;
	if(this.root){
		this.root.addNode(value);
	}else{
		this.root = new Node(value);
	}
}

Tree.prototype.traverse = function(){
	let nodeArray = [];
	return this.root.traverse(nodeArray);
}

Tree.prototype.search = function(value){
	const nodeList = this.traverse();
	for(let i = 0; i < nodeList.length; i++){
		if(nodeList[i].value == value) return nodeList[i];
	}
	return null;
}