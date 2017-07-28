let data = {};
$.ajax({
  url: 'http://localhost:4321/login',
  type: 'GET',
  crossDomain: true,
  contentType: 'application/json',
  data: JSON.stringify(data),
  dataType: 'json',
  success: function(data) {
    $('.button__login').one('click', function() {
      for (let key in data) {
        $('.login__output').append(key + ' : ' + data[key]);
      }
    });
  },
  error: function(xhr, ajaxOptions, thrownError) {
    console.log(data);
  },
});
$.ajax({
  url: 'http://localhost:4321/save',
  type: 'GET',
  crossDomain: true,
  contentType: 'application/json',
  data: JSON.stringify(data),
  dataType: 'json',
  success: function(data) {
    $('.button__save').one('click', function(event) {
      for (let key in data) {
        $('.save__output').append(key + ' ' + data[key]);
        console.log(data);
      }
    });
  },
  error: function(xhr, ajaxOptions, thrownError) {
    console.log(data);
  },
});
$.ajax({
  url: 'http://localhost:4321/load',
  type: 'GET',
  crossDomain: true,
  contentType: 'application/json',
  data: JSON.stringify(data),
  dataType: 'json',
  success: function(data) {
    $('.button__load').one('click', function() {
      for (let key in data) {
        $('.load__output').append(key + ' ' + data[key]);
        console.log(data);
      }
    });
  },
  error: function(xhr, ajaxOptions, thrownError) {
    console.log(data);
  },
});
