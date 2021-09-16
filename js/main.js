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



// $(document).ready(function () {
//     $('#form').on('submit', function () {
//         e.preventDefault();

//         let name= getEleme
//         let email=$("#email");
//         let message=$("#message");

//         ) {
//      if (name="" email="" message="") {
//                 alert('We have received your message.Our team will get back to you as soon as possible. Thank you for reaching out to us');
//                 $('form.contact');
//             } else {
//                 alert("All fields are required");
//             }
//         };
//     };

});
