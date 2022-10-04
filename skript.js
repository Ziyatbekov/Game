let points = 13
let timer = 10
$(".item").on("click", function () {
    console.log("На меня кликнули")
})
console.log(Math.floor(Math.random()*$(document).width()))
console.log($(document).width())

$(".item").on("click", function() {

    let x = Math.floor(Math.random()* ($(document).width() - 200))
    let y = Math.floor(Math.random()* ($(document).height() - 200))
    $(".item").css("top", y)
    $(".item").css("left", x)

    $(".item").addClass("blue")

    if(points > 15) {
        $(".finish").css("display", "flex")
        $(".timer").css("display", "none")
    } 
    if(timer < 1) {
        $(".lose").css("display", "flex")
    }
    $(".points").text(points++)
})
 // setTimeout - вызывает функцию единожды после определеенного промежутка времени
 // setInterval - вызывает функцию несколько раз с определенным промежутком времени

 let timerId = setInterval(function() { 
     if (timer >= 0) {
        $(".timer").text(timer--)   
        $(".item").removeClass("blue")
    }
 }, 1000)

//$(".points").text("Hello World")