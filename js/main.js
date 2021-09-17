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


    
});

    //user interface ouutput

    $(document).ready(function(){

        // var name=$("name").val();
        let name =(document.getElementById("name").value);
                

        $("form").submit(function(){
          alert("Hello, " + name + "we have received your message. Thank you for reaching out to us." + name);
        });
    });
