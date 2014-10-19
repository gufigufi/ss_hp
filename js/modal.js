$(document).ready(function() { // запускаем скрипт после загрузки всех элементов
    /* засунем сразу все элементы в переменные, чтобы скрипту не приходилось их каждый раз искать при кликах */
    var overlay = $('#overlay'); // подложка, должна быть одна на странице
    var open_modal = $('.open_modal'); // все ссылки, которые будут открывать окна
    var close = $('#modal_close, #overlay'); // все, что закрывает модальное окно, т.е. крестик и оверлэй-подложка
    var modal = $('#modal_form'); // все скрытые модальные окна

     open_modal.click( function(event){ // ловим клик по ссылке с классом open_modal
         event.preventDefault(); // вырубаем стандартное поведение
         //var div = $(this).attr('form.html'); // возьмем строку с селектором у кликнутой ссылки -- WHAT THE FUCK?
         overlay.fadeIn(400, //показываем оверлэй
             function(){ // после окончани показывани€ оверлэ€
                 modal // this selector is needed
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '50%', marginTop: '-265px'}, 200); // плавно показываем
         });
     });

     close.click( function(){ // ловим клик по крестику или оверлэю
            modal // все модальные окна
             .animate({opacity: 0, top: '0'}, 200, // плавно пр€чем
                 function(){ // после этого
                     $(this).css('display', 'none');
                     overlay.fadeOut(400); // пр€чем подложку
                 }
             );
     });
});