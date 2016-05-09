$(document).ready(function(){
$("#request").click(function(){
 var value = document.getElementById('searchTextId').value;
           $.getJSON("http://api.riffsy.com/v1/search?tag="+value+"&limit=50&output=json&callback=foo",
      function(data){
		console.log(data);
        var ul = document.createElement("ul");
        $.each(data.results, function(i, val){
            var li = document.createElement("li");
            li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a>";  
            ul.appendChild(li);
			});
$('#request_content').html(ul); 
    });
	
});
$('input').keydown(function(e){
	
	if(e.keyCode === 13){
 var value = document.getElementById('searchTextId').value;
           $.getJSON("http://api.riffsy.com/v1/search?tag="+value+"&limit=50&output=json&callback=foo",
	
      function(data){
		console.log(data);
        var ul = document.createElement("ul");
        $.each(data.results, function(i, val){
            var li = document.createElement("li");
            li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a>";  
            ul.appendChild(li);
			});
			
$('#request_content').html(ul); 
    });
	
	}
});
});