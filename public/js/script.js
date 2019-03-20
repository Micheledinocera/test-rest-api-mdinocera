$(document).ready(()=>{
    $('#pussante').click(()=>{
        console.log("pre-call");
        $.get('api/prova', (res)=>{
            console.log(res);
        });
    });
});