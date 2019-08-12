class Tree
{
	constructor()
	{
		this.root;
		this.totalNodes = 0;
	}
	
	addNode(value)
	{
		this.totalNodes++;
		if(this.root){
			this.root.addNode(value);
		}else{
			this.root = new Node(value);
		}
		return this;
	}
	
	addNodes(array)
	{
		array.forEach((i)=>{
			this.addNode(i);
		})
		return this;
	}
	
	traverse()
	{
		let nodeArray = [];
		return this.root.traverse(nodeArray);
	}
	
	search(value)
	{
		const nodeList = this.traverse();
		for(let i = 0; i < nodeList.length; i++){
			if(nodeList[i].value == value) return nodeList[i];
		}
		return null;
	}
	
	randomFill(min, max, amount)
	{
		for(let i = 0; i < amount; i++){
			this.addNode(Math.round(min + Math.random() * max))
		}
		return this;
	}
}
