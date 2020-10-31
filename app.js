class comments
{
	constructor(id, name, handle, content, upvotes, downvotes, parentId) {
		this.id = id;
		this.name = name;
		this.handle = handle;
		this.content = content;
		this.upvotes = upvotes;
		this.downvotes = downvotes;
		this.childrenIds = [];
		this.parentId = parentId;
	}
}


const addButton = document.getElementById("add-comment");

addButton.addEventListener("click", ()=> {
		let name = document.getElementById("name").value;
		let handle = document.getElementById("handle").value;
		let content = document.getElementById("comment").value;
		if(name.trim() !== '' || handle.trim() !== '' || content.trim() !== '')
		{
			addComment(name, handle, content, null);
		}
		
	});


