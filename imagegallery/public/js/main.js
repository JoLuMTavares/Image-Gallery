

function openModal() {
    document.querySelector(".main-container").style.display = "none";
    document.getElementById('myModal').style.display = "block";
    
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
    document.querySelector(".main-container").style.display = "block";
}

// This function gets data from the server
getData();

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    //  if (screen.width > 490) {
    
        var i;
        var x = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        // var captionText = document.getElementById("image-caption");
        if (x.length > 0) {

            if (n > x.length) {slideIndex = 1}
            if (n < 1) {slideIndex = x.length}
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none"; 
            }
            for (i = 0; i < dots.length; i++) {
                // dots[i].className = dots[i].className.replace("w3-opacity-off", "");
                dots[i].style.opacity = 0.6;

            }
        
            x[slideIndex-1].style.display = "block";
           // dots[slideIndex-1].className += "w3-opacity-off";
           dots[slideIndex-1].style.opacity = 1;
        }
       
        //  carousel();
    //  }

}


/* 
    Code for the Upload form.
*/

var mainCont = document.querySelector(".main-column");
var uploadForm = document.querySelector(".file-Upload");


$(".uploadButton").click(function() {

    mainCont.style.display = "none";
    uploadForm.style.display = "block";
});

$(".cancel-Upload").click((e) => {

    mainCont.style.display = "grid";
    uploadForm.style.display = "none";
});


/* This is the section to retrieve the image files 
from the server.
*/

function getData() {
    var theMainTag = document.querySelector(".main-column");
    var largeImgTag = document.querySelector(".large-Section");
    var thumbsImgTag = document.querySelector(".thumbs-Section");

    theMainTag.innerHTML = "";
    largeImgTag.innerHTML = "";
    thumbsImgTag.innerHTML = "";    

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/search?");

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("success, status code is 200");

            var data = xhr.responseText;
            var dataObj = JSON.parse(data);


            console.log(data);
            console.log(dataObj);

            var images = dataObj.images;
            var id = 1;
            images.forEach(element => {
                var tags = element.tags;
                if (screen.width > 490) {
                    
                    theMainTag.innerHTML += "<figure class='image-Thumb'>" +
                                                "<button type='submit' id='remove-Image' onclick='removeImage(\""+ tags[1] +"\");'><i class='ion-android-delete' title='Remove this image'></i></button>" +    
                                                "<img class='thumb' src='  ../images/"+ element.image +"' onclick='openModal();currentDiv("+ id +")'>" +
                                                "<figcaption class='fgcap'>"+ tags[1] +"</figcaption>" +
                                            "</figure>";  

                    largeImgTag.innerHTML += '<div class="mySlides">' +
                                                '<img class="large-Images" src="../images/'+ element.image +'" alt="'+ tags[1] +'">' +
                                                '<div class="image-caption">' +
                                                    '<h5 class="img-Title">'+ tags[1] +'</h5>' +
                                                    '<p class="img-Text">Description yet to come.</p>' +
                                                '</div>' +
                                            '</div>';                            

                    thumbsImgTag.innerHTML += '<div class="thumbs-gallery">' +
                                                '<img class="imgSel demo" src="../images/' + element.image +'" onclick="currentDiv('+ id +')" alt="'+ tags[0] +'">' +
                                            '</div>';
                }
                else {
                    
                    theMainTag.innerHTML += '<figure>' +
                                                '<img class="thumb" src="  ../images/'+ element.image +'">' +
                                                '<figcaption class="fgcap">'+ tags[1] +'</figcaption>' +
                                            '</figure>';  
                }
                
                id++;
            });
            
        }
    }
    xhr.send();
} 

function searchImages() {
    
    var searchImgTag = document.querySelector(".search-Tag").value;

    if (searchImgTag == "")
        getData();
    else {
        var theMainTag = document.querySelector(".main-column");
        var largeImgTag = document.querySelector(".large-Section");
        var thumbsImgTag = document.querySelector(".thumbs-Section");


        theMainTag.innerHTML = "";
        largeImgTag.innerHTML = "";
        thumbsImgTag.innerHTML = "";

        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:3000/search?q="+ searchImgTag);

        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log("sucess, status code is 200");

                var data = xhr.responseText;
                var dataObj = JSON.parse(data);


                console.log(data);
                console.log(dataObj);

                var images = dataObj.images;
                var id = 1;
                images.forEach(element => {
                     if (screen.width >= 491) {
                        var tags = element.tags;
                        theMainTag.innerHTML += "<figure class='image-Thumb'>" +
                                                    "<button type='submit' id='remove-Image' onclick='removeImage(\""+ tags[1] +"\");'><i class='ion-android-delete' title='Remove this image'></i></button>" +    
                                                    "<img class='thumb' src='  ../images/"+ element.image +"' onclick='openModal();currentDiv("+ id +")'>" +
                                                    "<figcaption class='fgcap'>"+ tags[1] +"</figcaption>" +
                                                "</figure>";  
    
                        largeImgTag.innerHTML += '<div class="mySlides">' +
                                                    '<img class="large-Images" src="../images/'+ element.image +'" alt="'+ tags[1] +'">' +
                                                    '<div class="image-caption">' +
                                                        '<h5 class="img-Title">'+ tags[1] +'</h5>' +
                                                        '<p class="img-Text">Description yet to come.</p>' +
                                                    '</div>' +
                                                '</div>';                            
    
                        thumbsImgTag.innerHTML += '<div class="thumbs-gallery">' +
                                                    '<img class="imgSel demo" src="../images/' + element.image +'" onclick="currentDiv('+ id +')" alt="'+ tags[1] +'">' +
                                                '</div>';
                    }
                    else {
                        var tags = element.tags;
                        theMainTag.innerHTML += '<figure>' +
                                                    '<img class="thumb" src="  ../images/'+ element.image +'">' +
                                                    '<figcaption class="fgcap">'+ tags[1] +'</figcaption>' +
                                                '</figure>';  
                    }
                    id++;
                });
                return;
            }
        }

        xhr.send();
    }

}

