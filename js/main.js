$(document).ready(function (){
    
    
    //show and hide paragraph on click

    $("#design").on('click',function () {
        $("#design").hide();
        $(designpg).show(); 
      
    });

    $("#design").on('click',function () {
        $("#design").hide();
        $(designpg).show(); 
      
    });

    
    $('#dev').on('click',function  () {
        $("#devpg").show();
        $('#dev').hide();
        
    });

    $('#design').on('click',function  () {
        $("#dev").show();
        $('#product').show();
        
    });

    $('#product').on('click',function  () {
        $("#productpg").show();
        $('#product').hide();
        
    });









// ///
// $(document).ready(function () {
//     $('#form').on('submit', function () {
//         e.preventDefault();

//         let name=$("#name");
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
