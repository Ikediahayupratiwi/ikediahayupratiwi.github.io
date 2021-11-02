const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function checkForm(){
	var username = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	if(username == "" || password == ""){
		alert("Form Tidak Toleh Kosong");
	}
	else{
		alert("Anda berhasil Log in");
	}
}

function checkForm(){
	var nama = document.getElementById("nama").value;
	var email = document.getElementById("email").value;
	var nohandphone = document.getElementById("nohandphone").value;

	if(nama == "" || email == "" || nohandphone == ""){
		alert("Form Tidak Toleh Kosong");
	}
	else{
		alert("Pesan Anda Terkirim");
	}
}