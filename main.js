var images=["father.jpg","mother.jpg","me.jpg","sis.jpg","grandmother.jpg","grandfather.jpg"];

var names=["Vijay Anand", "buvana", "pranav","akshara","rani","raja"];

var i = 0;

function update(){

    i++;
    var members_of_family_array = 5
    if(i > members_of_family_array)

    {
        i = 0;
              
    }
    var updatedImages = images[i];
        var updatedNames = names[i];
        document.getElementById("image").src = updatedImages;
        document.getElementById("family_member").innerHTML=updatedNames;
   
}