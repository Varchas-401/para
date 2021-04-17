function getParagraph1() {
    var input = []
    for (var i = 1; i <= 6; i++) {
        input.push(document.getElementById("para1_input_box" + i).value)
    }
    document.getElementById("showParagraph1").innerHTML = input.join(". ")
}


function getParagraph2() {
    var input = []
    for (var i = 1; i <= 6; i++) {
        input.push(document.getElementById("para2_input_box" + i).value)
    }
    document.getElementById("showParagraph2").innerHTML = input.join(". ")
}