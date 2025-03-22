//your code here!

let orderedList = document.querySelector("#infi-list");

orderedList.innerHTML = 
	`
	<li>Item1</li>
	<li>Item2</li>
	<li>Item3</li>
	<li>Item4</li>
	<li>Item5</li>
	<li>Item6</li>
	<li>Item7</li>
	<li>Item8</li>
	<li>Item9</li>
	<li>Item10</li>
	`;


orderedList.addEventListener("scroll", (e) => {
	
	if(Math.round(orderedList.scrollTop + orderedList.clientHeight) >= orderedList.scrollHeight){
		orderedList.innerHTML += 
			`
			<li>newItem</li>
			<li>newItem</li>
			`;
	};
});