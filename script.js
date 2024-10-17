//your JS code here. If required.


document.getElementById('btn').addEventListener('click',()=>{
	var num = parseInt(document.getElementById('ip').value);

	firstPromise(num)
	.then((first)=>{
		return secondPromise(first);
	})
	.then((second)=>{
		return thirdPromise(second);
	})
	.then((third)=>{
		return fourthPromise(third);
	})
	.then((fourth)=>{
		return fifthPromise(fourth);
	})
	.then((fifth)=>{
		document.getElementById('output').textContent = `Final Result: ${fifth}`;
	})
	.catch((message)=>{
		console.log(message);
	})

	
	
})



function firstPromise(num)
{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			document.getElementById('output').textContent = `Result: ${num}`;
			resolve(num);
		},2000);
	})
}

function secondPromise(num)
{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			const result = num*2;
			document.getElementById('output').textContent = `Result: ${result}`;
			resolve(result);
		},1000);
	})
}

function thirdPromise(num)
{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			const result = num-3;
			document.getElementById('output').textContent = `Result: ${result}`;
			resolve(result);
		},1000);
	})
}


function fourthPromise(num)
{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			const result = num/2;
			document.getElementById('output').textContent = `Result: ${result}`;
			resolve(result);
		},1000);
	})
}

function fifthPromise(num)
{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			const result = num+10;
			document.getElementById('output').textContent = `Result: ${result}`;
			resolve(num+10);
		},1000);
	})
}








