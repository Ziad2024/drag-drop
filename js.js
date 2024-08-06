let lists=document.getElementsByClassName("list")
let right=document.querySelector(".right")
let left=document.querySelector(".left")


for(list of lists){
    list.addEventListener("dragstart",(e)=>{
        let selected=e.target;
        
        // The default behavior of the ondragover event is to not allow dropping.
        // This is because, in many cases, allowing dropping without explicit permission could lead to unexpected and potentially undesirable behavior.
        // By default, the browser prevents elements from being dropped into other elements.
        // When you're implementing custom drag-and-drop functionality, you have to explicitly handle the ondragover event and call e.preventDefault() to allow the drop. 
        right.addEventListener("dragover",(e)=>{
            e.preventDefault();
        });
        
        right.addEventListener("drop",()=>{
            right.appendChild(selected);
            selected=null
        });
        left.addEventListener("dragover",(e)=>{
            e.preventDefault();
        });
        
        left.addEventListener("drop",()=>{
            left.appendChild(selected);
            selected=null
        });
    });
}
