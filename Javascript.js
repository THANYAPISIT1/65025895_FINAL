
function fncSubmit()
{
	if(document.form1.NameInput.value == "")
	{
		alert('Please input Input Name');
		document.form1.NameInput.focus();
		return false;
	}	
	if(document.form1.SurnameInput.value == "")
	{
		alert('Please input Input Surname');
		document.form1.SurnameInput.focus();		
		return false;
	}
    if(document.form1.DateInput.value == "")
	{
		alert('Please input Input Date');
		document.form1.DateInput.focus();		
		return false;
	}	
	document.form1.submit();
}

function Submit(){

    // Input --> Value //
    let NameInput = document.getElementById('NameInput');
        let Name = NameInput.value;
        console.log(Name);
    let SurnameInput = document.getElementById('SurnameInput');
        let Surname = SurnameInput.value;
        console.log(Surname);
    let GenderInput = document.getElementById('GenderInput');
        let BirthDate = DateInput.value;
        console.log(BirthDate);
    let langauge = document.getElementById('menu');
        choose = langauge.value;
        console.log(choose);

    // Output //
    let Output = document.getElementById('Output');
        Output.innerHTML ='<span style="color: green;">'+Name +" , "+Surname+" , "+BirthDate+" , "+choose+'</span>'
    
}

// const btn= document.getElementById("btn");

// btn.addEventListener('click', function(){
//   var name = document.getElementById("txt1").value;
//   alert("Name: "+ name);
// });
