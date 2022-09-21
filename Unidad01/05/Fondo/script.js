function colorChanger() {
    var selectValue = document.getElementById("mySelection").value;
    document.getElementById("dummy").innerHTML="Tu seleccion fue: " + selectValue;
    document.body.style.backgroundColor=selectValue;  
}

// es otra cosa

