/*Name this external file gallery.js*/

function addtabindex()
{
    let elements=document.querySelectorAll("img");
    for(let i =0;i<elements.length;i++)
    {
        console.log("Image"+elements[i].src)

        elements[i].setAttribute("tabindex",i+1);
        console.log("Image"+elements[i].tabIndex)
    }

}

function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
      let backgroundimg= document.getElementById("image");
      let source=previewPic.src;
      backgroundimg.style.backgroundImage=`url('${source}')`;
      backgroundimg.textContent=previewPic.alt;
       }
   
       function unDo(){
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
       let backgroundimg=document.getElementById("image");
       backgroundimg.style.backgroundImage=`url('')`;
       backgroundimg.textContent="Hover over an image below to display here.";
       }