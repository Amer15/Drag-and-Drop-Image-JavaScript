console.log("js v1");

//grabbing drag-img and drag-box elements
const dragImg = document.querySelector('.drag-img');
const dragBoxes = document.getElementsByClassName('drag-box');

// eventListener for draggable elements dragImg
dragImg.addEventListener('dragstart',(e)=> {
   console.log('dragstart has been trigerred');
   e.target.className += ' hold';
    setTimeout(()=>{
        e.target.className = 'hide';
    },0)
});

dragImg.addEventListener('dragend',(e)=> {
    console.log('dragEnd has been trigerred');
    e.target.className = 'drag-img';
});


// loop for dragboxes
for( dragBox of dragBoxes) {
    console.log(dragBox);
     dragBox.addEventListener('dragover',(e)=> {
         e.preventDefault();
         console.log('dragover method is triggerd');

     })

     dragBox.addEventListener('dragenter',(e)=> {
        console.log('dragenter method is triggerd');
        e.target.className += ' dashed';


     })

     dragBox.addEventListener('dragleave',(e)=> {
        console.log('dragleave method is triggerd');
        e.target.className = 'drag-box';
         
    })

    dragBox.addEventListener('drop',(e)=> {
        console.log('drop method is triggerd');
        e.target.append(dragImg);
         
    })
}