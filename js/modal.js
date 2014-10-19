$(document).ready(function() { // ��������� ������ ����� �������� ���� ���������
    /* ������� ����� ��� �������� � ����������, ����� ������� �� ����������� �� ������ ��� ������ ��� ������ */
    var overlay = $('#overlay'); // ��������, ������ ���� ���� �� ��������
    var open_modal = $('.open_modal'); // ��� ������, ������� ����� ��������� ����
    var close = $('#modal_close, #overlay'); // ���, ��� ��������� ��������� ����, �.�. ������� � �������-��������
    var modal = $('#modal_form'); // ��� ������� ��������� ����

     open_modal.click( function(event){ // ����� ���� �� ������ � ������� open_modal
         event.preventDefault(); // �������� ����������� ���������
         //var div = $(this).attr('form.html'); // ������� ������ � ���������� � ��������� ������ -- WHAT THE FUCK?
         overlay.fadeIn(400, //���������� �������
             function(){ // ����� �������� ����������� �������
                 modal // this selector is needed
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '50%', marginTop: '-265px'}, 200); // ������ ����������
         });
     });

     close.click( function(){ // ����� ���� �� �������� ��� �������
            modal // ��� ��������� ����
             .animate({opacity: 0, top: '0'}, 200, // ������ ������
                 function(){ // ����� �����
                     $(this).css('display', 'none');
                     overlay.fadeOut(400); // ������ ��������
                 }
             );
     });
});