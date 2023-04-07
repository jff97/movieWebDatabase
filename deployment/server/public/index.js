//fetch('')
$.ajax({
    url:'/movies',
    type: 'GET',
    dataType: 'json',
    data: response.body,
    success: 'success'
});