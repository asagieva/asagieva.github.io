// var a = 35;
// var b = 'Привет, ';
// var db = 'мир!';
// var d = 5;
// a = 456;
// a = prompt ('Напишите значение переменной a')
// if(a == 37){
//     alert ('a = 37')
// } else {
//     alert ('Что-то другое')
// }


// alert(b + db);
// if (a ==  35) {
//     alert ('Все верно!');
// }

/*
for (var i = 0; i < 5; i++){
    alert (i);
}
*/
/*
var a   ,
    b,
    c;

a = prompt ('первое число');
b = prompt ('второе число');
c = Number(a) + Number(b);
alert(c);
*/



var btn = document.getElementById('btn');
btn.onclick = function() {
    var text = document.querySelector('p.intro');
    text.classList.add('blueviolet')    
    var img = document.querySelector('.desktop');
    img.style.display = 'none'
}
$(function () {
	$(window).scroll(function() {
	    $('.section-title').each(function() {
            var imagePos = $(this).offset().top,
                topOfWindow = $(window).scrollTop();

	        if (imagePos < topOfWindow+650) {
	            $(this).addClass('fadeInLeft');
	        }
	    });
	});
});
