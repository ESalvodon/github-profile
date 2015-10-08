import $ from 'jquery';
import Router from './router';

$(() => {
  let router = new Router();


$('#searchForm').submit(function(event) {
      var userName = $('#userSearch').val();
      router.navigate("#" + userName, true);
      document.getElementById('searchForm').reset();
      return false;  //another method of doing event.preventDefault();, keeps page from refreshing
    });
  });
