
    var n1, n2, sum, text;

    n1 = document.getElementById("Primer dato: ").value;
    n2 = document.getElementById("Segundo dato: ").value;

    sum = parseFloat(n1)+parseFloat(n2);

    text= sum;

    document.getElementById("sumando").innerHTML = text;