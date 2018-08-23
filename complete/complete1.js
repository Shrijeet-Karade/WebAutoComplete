
function onClickEventInvisible()
{
  document.getElementById("list").style.display="none";
}
function AutocompleteFunct(name)
{     
  var myArray = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya"];
  myArray.sort();
  if(name.length !== 0)
  {
    var boxInput = document.getElementById("list");
    boxInput.innerHTML ='';
    var listOfAutocomplete = document.getElementById("list");
    for (var index = 0; index < myArray.length; index++)
    {
      var nameAtIndex = myArray[index].toLowerCase();
      var local=name.toLowerCase();
      if(nameAtIndex.indexOf(local) !== -1)
      {
        var newElement = document.createElement("li");
        newElement.setAttribute("onclick", "renderVisible('"+myArray[index]+"')");
        listOfAutocomplete.appendChild(newElement);
        newElement.innerHTML = myArray[index];
        flag=1;
      }
    }
    if(flag!==1)
    {
      var li = document.createElement("li");
      li.innerHTML = "Nothing Found";
      listOfAutocomplete.appendChild(li);
    }
  }
  else
  {
    boxInput = document.getElementById("list");
    boxInput.innerHTML ='';
  }
  console.log();
}

function renderVisible(name) 
{
   document.getElementById("enter-val").value = name;
   document.getElementById("list").innerHTML="";
}
