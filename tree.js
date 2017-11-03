class Tree
{
	constructor()
	{
		this.root;
	}
}

Tree.prototype.addNode = function(value){
	if(this.root){
		this.root.addNode(value);
	}else{
		this.root = new Node(value, null);
	}
}