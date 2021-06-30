var breedImage = $("#breed-image");
var breed;
var dropdown = $('#dog-breeds');
var flag = true;
window.onload = function(){
    alert("WELCOME, HERE YOU CAN SEE IMAGES OF YOUR FAV DOGS");
}

$.get('https://dog.ceo/api/breeds/list/all',function(data){
    let dogBreed = data.message;
    for(let breed in dogBreed){
        dropdown.append('<option value="'+breed+'">'+breed+'</option>');
    }
});
dropdown.change(function(){
    flag = true;
})


$('form button').click(function(e){
    e.preventDefault();
    if(flag){
    breed = dropdown.val();
    displayImage(breed);
    flag=false;
    }
})

$('#next').click(function(e){
    e.preventDefault();
    if (flag == false){
        displayImage(breed);
    }
})


function displayImage(breed){
    var url = "https://dog.ceo/api/breed/"+breed+"/images/random";
    $('#breed-image img').remove();
    $.get(url,function(data){
        var imageUrl = data.message;
        breedImage.append('<img src="' + imageUrl + '" alt="' + breed + '">')
    });
}