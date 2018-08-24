var counter =0;
function renderInvisible()
{
  
  document.getElementById("list").innerHTML=""; 
}
function AutocompleteFunct(name,event)
{     
  var myArray = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya"];
  myArray.sort();
  if(name.length !== 0)
  { 
    var currentCountOfElementsInList=0
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
        currentCountOfElementsInList++;
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
  console.log("exiting AutocompleteFunct and calling navigation function ");
  navigateScroll(event,currentCountOfElementsInList);
}
function navigateScroll(event,currentCountOfElementsInList)
{
  //var lastKeyStroke= 0;
  var previousCount= currentCountOfElementsInList;
  if(previousCount!=currentCountOfElementsInList)
  {
    // this is if the number of elements in lists change . Then counter should initiate from start
    counter=0;
  }
  var listOfAutocomplete=document.getElementById("list").innerHTML;
  var x = event.which || event.keyCode;
  // UNHighlight every element in list here 
for(var i=0;i<currentCountOfElementsInList;i++)
{
  document.getElementsByTagName("ul")[0].childNodes[i].setAttribute("class","unHighlight");
}
  if(x==40)
  { 
    if(counter<currentCountOfElementsInList-1)
    {
      //highlight elements here
     document.getElementsByTagName("ul")[0].childNodes[counter].setAttribute("class","highlight");   
     var elmnt = document.getElementsByTagName("ul")[0].childNodes[counter];
     elmnt.scrollIntoView(false);
     //  if(lastKeyStroke==38)
     //  {
     //   counter+=2;
     //   lastKeyStroke=x;
     //  }
     //  else{
     //   counter++;
     //   lastKeyStroke=x;
     //  }
     // }
    counter++;
    }
    else
    {
      counter=currentCountOfElementsInList-1;  
      document.getElementsByTagName("ul")[0].childNodes[counter].setAttribute("class","highlight");  
      var elmnt = document.getElementsByTagName("ul")[0].childNodes[counter];
      elmnt.scrollIntoView(false);
    }   
  }
  else if(x==38)
  {

    if(counter>0)
    {
      // if(lastKeyStroke==40)
      // {
      // counter-=2;
      // lastKeyStroke=x;
      // }
      // else
      // {
      //   counter--;
      //   lastKeyStroke=x;
      // }
      counter--;
      document.getElementsByTagName("ul")[0].childNodes[counter].setAttribute("class","highlight");
      var elmnt = document.getElementsByTagName("ul")[0].childNodes[counter];
      elmnt.scrollIntoView(false);
      // highlight elements here       
    }
    else
    { 
      counter=0;
      document.getElementsByTagName("ul")[0].childNodes[0].setAttribute("class","highlight");
      var elmnt = document.getElementsByTagName("ul")[0].childNodes[counter];
      elmnt.scrollIntoView(false);
    }
  }
  else if (x==13)
  {
      document.getElementById("enter-val").value=document.getElementsByTagName("ul")[0].childNodes[counter].innerHTML;
      document.getElementById("list").innerHTML="";
      //enter the value into the box
  }
  else{}
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