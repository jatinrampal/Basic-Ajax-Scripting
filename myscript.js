//Jatin Rampal
//Creating a document.ready function so that the output is loaded right from the start
$(document).ready(function() {
	$.ajax({
		//Using the same pattern as explained in class.
		//Note that the success: refers to the parseXML function which has been defined below
		type: "GET",
		url: "recipe.xml",
		dataType: "xml",
		success:parseXML
	});

});

function parseXML(xml)
{	//Appending the heading of the page by finding the h1 id that is rname and appending the text by finding the recipe tag 
	//and the attribute name in the xml file
	$("#rname").append($(xml).find('recipe').attr('name') + " Jatin's Exercise 2");

	//Creating a for each loop so that the all the 3 images and the details are dislayed
	$(xml).find('food').each(function(){
		//Note that everything is being appended to the section that has 'main' as its id
		//Appending the image by adding the source in the image tag using the text provided in xml
		$("#main").append("<img src = " +  $(this).find("pic").text() + " >");
		//Adding the text from the item tag
		$("#main").append($(this).find("item").text() + " / ");
		//Adding the attribute amt from the food tag
		$("#main").append($(this).attr("amt") + " / ");
		//Adding the attribute directions from the item tag
		$("#main").append($(this).find("item").attr("directions") + "<br>");
	});
	//Appending text into the same section using the same methods as above
	//food:eq(1) basically refers to the second food tag since find generates an array of all the items with tag food.
	$("#main").append("2nd item Name and Amount:<br>" + $(xml).find("food:eq(1)").find("item").text() + $(xml).find("food:eq(1)").attr("amt"));
}