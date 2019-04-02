$(document).ready(()=>{
    $('#pussante-get').click(()=>{
        $.get('api/prova', 
            (res)=>{console.log(res);
        });
    });
    $('#pussante-get-id').click(()=>{
        $.get('api/prova/'+$('#input-get-id').val(), 
            (res)=>{console.log(res);
        });
    });
    $('#pussante-create').click(()=>{
        $.post('api/prova', {name: $('#input-create').val()},
            (res)=>{console.log(res);
        });
    });
    $('#pussante-update').click(()=>{
        $.ajax({
            url:'api/prova/'+$('#input-update-id').val(),
            type:'PUT',
            data: {name: $('#input-update-name').val()}
        })
        .done(
            (res)=>{console.log(res);
        });
    });
    $('#pussante-delete').click(()=>{
        $.ajax({
            url:'api/prova/'+$('#input-delete').val(),
            type:'DELETE'
        })
        .done(
            (res)=>{console.log(res);
        });
    });
});