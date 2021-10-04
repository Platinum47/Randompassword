var generateBtn = document.getElementById("generate");
var Next1Button = document.getElementById("next1");
var Next2Button = document.getElementById("next2");

var PromptGenerate = document.querySelector("#PromptGenerate");
var PromptNumChar = document.querySelector("#PromptNumChar");
var PromptTypeChar = document.querySelector("#PromptTypeChar");

var string_length;
var typeLower;
var typeUpper;
var typeNum;
var typeSpec;
  
// prompts
// switch to promt 2
function switchPrompt2() 
{
	
  PromptGenerate.style.visibility="hidden";
  PromptNumChar.style.visibility="visible";
}

// switch to promt 3
function switchPrompt3() 
{
	
  string_length = document.getElementById("NumChar").value;
  alert(string_length);
  PromptNumChar.style.visibility="hidden";
  PromptTypeChar.style.visibility="visible";
}

// Write password to the #password input
function writePassword() 
{

  typeLower = document.getElementById("TypeLower");
  typeUpper = document.getElementById("TypeUpper");
  typeNum = document.getElementById("TypeNum");
  typeSpec = document.getElementById("TypeSpec");
	
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate a random password
function generatePassword()
{
	debugger;
	var types = '';

	if (typeLower.checked) 
	{
		types = types + "L";
	}
	
	if (typeUpper.checked) 
	{
		types = types + "U";
	}
    if (typeNum.checked) 
	{
		types = types + "N";
	}
    
	if (typeSpec.checked) 
	{
		types = types + "S";
	}

	if (types.length < 1)
    {
		errorMessage = "You must select at least one type.";
		return errorMessage;
    }
                         
    var Lower = "abcdefghijklmnopqrstuvwxyz";
    var Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var Nums = "0123456789";
    var Specs = ")(*&^%$#@!";

	var randomstring = '';
	                        
	for (var i=0; i<string_length; i++) {
		var index = Math.floor(Math.random() * types.length)
		debugger
	   var randomtype = types.substring(index,index+1);

       switch(randomtype) 
		{
			case "L":
				var chars = Lower;
				break
			case "U":
				var chars = Upper;
				break
			case "N":
				var chars = Nums;
				break
            case "S":
				var chars = Specs;
				break
       }
      
        var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);      
	}
	return randomstring;
}
// Add event listener to generate button
generateBtn.addEventListener("click", switchPrompt2);
Next1Button.addEventListener("click", switchPrompt3);
Next2Button.addEventListener("click", writePassword);