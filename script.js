function add() {
    var input = document.getElementById('input');
    var result = document.getElementById('result');
    
    if (input.value === '') {
        alert("You must write something!");
    } else {
        var list = document.createElement("li");
        list.textContent = input.value;

        var span = document.createElement("span");
        span.innerHTML="X";
        span.onclick = function() {
            result.removeChild(list)
        }

        var radio=document.createElement("input");
        radio.type="radio";
        radio.onclick = function() {
            if (list.style.textDecoration === "line-through") {
                list.style.textDecoration = "none";
            } else {
                list.style.textDecoration = "line-through";
            }
        }

        result.appendChild(list);
        list.appendChild(radio);
        list.appendChild(span);

        input.value = '';
    }
}
