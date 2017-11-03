class Node
{
	constructor(value)
	{
		this.value = value;
		this.rightChild = null;
		this.leftChild = null;
	}
}

Node.prototype.addNode = function(value){
	if(value > this.value){
		if(this.rightChild == null){
			this.rightChild = new Node(value);
		}else{
			this.rightChild.addNode(value);
		}
	}else if(value < this.value){
		if(this.leftChild == null){
			this.leftChild = new Node(value);
		}else{
			this.leftChild.addNode(value);
		}
	}else{
		return;
	}
}