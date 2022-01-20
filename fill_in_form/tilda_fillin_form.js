<style>
.t-input-group_ta textarea.t-input {
display:none;
}
.t-checkbox__indicator {
border-radius: 10px;
}
</style>
<style>
.t-input-group_uc .uploadcare-widget {
display:none;
}
</style>
<style>
.t-input-group_ur .t-input {
display:none;
}
</style>



<script>
$(document).on('change','select[name="choose"]',function(e){
var place = $(this)[0].selectedIndex;

if (place==0) {
    $('.t-input-group_uc .uploadcare-widget').slideUp(300);    
 $('.t-input-group_ur .t-input').slideUp(300);   
$('.t-input-group_cb .t-checkbox__control').slideDown(300);
$('.t-input-group_cb .t-checkbox').prop("checked", false);

}
;

if (place==1 || place==2 || place==3){
$('.t-input-group_uc .uploadcare-widget').slideDown(300);
$('.t-input-group_cb .t-checkbox__control').slideDown(300);



} 
;

if (place==4) {
    $('.t-input-group_uc .uploadcare-widget').slideUp(300);    
    
$('.t-input-group_ur .t-input').slideDown(300);
$('.t-input-group_cb .t-checkbox__control').slideUp(300);
$('.t-input-group_ta textarea.t-input').slideUp(300);

}
else {
$('.t-input-group_ur .t-input').slideUp(300);

}
;


});


</script>
<script>
$(document).on('change','input[name="q text"]',function(e){
if( $('input[name="q text"]').is(':checked') ){
$('.t-input-group_ta textarea.t-input').slideDown(300);
}else{
$('.t-input-group_ta textarea.t-input').slideUp(300);
};
});
</script>
<script>
$(document).on('change','input[name="q link"]',function(e){
if( $('input[name="q link"]').is(':checked') ){
$('.t-input-group_ur .t-input').slideDown(300);
}else{
$('.t-input-group_ur .t-input').slideUp(300);
};
});
</script>