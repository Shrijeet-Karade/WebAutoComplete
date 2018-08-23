
function renderInvisible()
{
  
  document.getElementById("list").innerHTML=""; 
}
function AutocompleteFunct(name)
{     
  var myArray = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya"];
  myArray.sort();
  if(name.length !== 0)
  { 
    var flag=0;
     document.getElementById("list").innerHTML ='';
    var listOfAutocomplete = document.getElementById("list");
    for (var index = 0; index < myArray.length; index++)
    {
      var nameAtIndex = myArray[index].toLowerCase();
     //    var nameAtIndex= this.element.val().replace(/ /g, '').replace(/.(?=.)/g, '$& *');
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
    if(flag!=1)
    {
      var newElement=document.createElement("li");
      newElement.setAttribute("onclick", "renderVisible('"+myArray[index]+"')");
      listOfAutocomplete.appendChild(newElement);
      newElement.innerHTML="NotFound";
    }
  }
  else
  {
    document.getElementById("list").innerHTML ='';
  }
  console.log("exiting AutocompleteFunct");
}
function renderVisible(name) 
{
   document.getElementById("enter-val").value = name;
   document.getElementById("list").innerHTML="";
   console.log("exiting renderVisible");
}
function renderDataListInvisible()
{
  document.getElementById("enter-val").value="";
  document.getElementById("list").innerHTML="";
  console.log("exiting renderDataListInVisible");
}