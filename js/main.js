$(document).ready(function (){
    

    //Allow display of paragraph on click from hidden mode

    $("#design").on('click',function () {
        $("#design").hide();
        $(designpg).show(); 
      
    });
    
    $('#dev').on('click',function  () {
        $("#devpg").show();
        $('#dev').hide();
        
    });

    $('#product').on('click',function  () {
        $("#productpg").show();
        $('#product').hide();
        
    });

//this will allow return of logo after paragraph display
    $('#designpg').on('click',function  () {
        $("#design").show();
        $('#designpg').hide();
        
    });

    $('#devpg').on('click',function  () {
        $("#dev").show();
        $('#devpg').hide();
        
    });

    $('#productpg').on('click',function  () {
        $("#product").show();
        $('#productpg').hide();
        
    });

    (document).ready(function (){
        $("#form").submit(function(event) {
            event.preventDefault();

      var userName=$("#name").val();
      var message=$("#message").val();

      if(userName() && message()){
        alert("Hello "+ userName +". We have received your message. Thank you for reaching out to us.");
      }
      else{
        alert("please fill all fields");
      }
    }  


});

