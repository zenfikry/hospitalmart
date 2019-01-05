function setDate(){
    $( ".datepicker" ).datepicker({ 
        changeMonth: true,
        changeYear: true,
        dayNames: getDayNames(),
        monthNames: getMonthNames(),
        dateFormat: "DD, d MM yy"
    });
}
function getDayNames(no){
    var dayNames = [ "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu" ];
    if( no === undefined ) return dayNames; else return dayNames[no];
}
function getMonthNames(no){
    var monthNames = [ "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember" ];
    if( no === undefined ) return monthNames; else return monthNames[no];
}