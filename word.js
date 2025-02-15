let color= document.querySelector(".color");
color.addEventListener('input',function(){
    const currentSize=getComputedStyle(document.querySelector(".text")).fontSize;
    const currentFont=getComputedStyle(document.querySelector(".text")).fontFamily;
    console.log(currentFont);
    document.querySelector(".textRow").innerHTML=`
    <span style="color: ${this.value}; font-size:${currentSize}; font-family:${currentFont}" class="text">Test</span>
    `;
});

let size= document.querySelector(".form-control");
size.addEventListener('input',function(){
    const currentFont=getComputedStyle(document.querySelector(".text")).fontFamily;
    const currentColor=document.querySelector(".text").style.color;
    document.querySelector(".textRow").innerHTML=`
    <span style="font-size: ${this.value}px; color:${currentColor}; font-family : ${currentFont}" class="text">Test</span>
    `;
});


let font = document.querySelector(".font");
font.addEventListener('click',function(){
    const currentColor=document.querySelector(".text").style.color;
    const currentSize=getComputedStyle(document.querySelector(".text")).fontSize;
   // console.log(currentSize);
    document.querySelector(".textRow").innerHTML=`
    <span style="font-size:${currentSize}; font-family: ${this.value} ; color:${currentColor}" class="text">Test</span>
    `;
    
});