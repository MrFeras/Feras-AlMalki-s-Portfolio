document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("changeColorBtn");
    button.addEventListener("click" ,function() {
        const colors = ["#f0f0f0", "#000000", "#ff5733", "#33ff45"]
        const randomcolor = colors[Math.floor(Math.random()* colors.length)];
            document.body.style.background = randomcolor;
    
        
    });

});
