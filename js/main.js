var connect = new XMLHttpRequest();
var j;
function ajax(){
	$("#error").css("opacity","0");
	$("#sub").css("display","none");
	$(".grid").empty();
	connect.open("GET","http://localhost:1111",true);
	connect.onreadystatechange = function(){
		if(connect.readyState == 4 & connect.status == 200){
			j = JSON.parse(connect.responseText);
			var l = j.length;
			for(i = 0; i<l; i++){
				$(".grid").append("<div class='elem-box'><div class='elem elem-"+i+"'><img><h4></h4><hr></div></div>");
				for (key in j[i]) {
					if(key=="avatar"){
						$(".elem-"+i+" img").attr("src",j[i][key]);
					}
					else if(key=="firstName"){
						var firstName = j[i][key];
					}
					else if(key=="lastName"){
						var lastName = j[i][key];
					}
					else if(key=="id"){
						if(j[i][key]){
							$(".elem-"+i).append("<p><b>"+key+": </b>"+j[i][key]+"</p>");
							$(".elem-"+i).attr("id",j[i][key]);
						}
					}
					else if(key=="bossid"){
						if(j[i][key]){
							$(".elem-"+i).append("<p><b>"+key+": </b>"+j[i][key]+"</p>");
							$(".elem-"+i).attr("boss",j[i][key]);
						}
					}
					else{
						$(".elem-"+i).append("<p><b>"+key+": </b>"+j[i][key]+"</p>");
					}
					var fullName = firstName + " " + lastName;
					$(".elem-"+i+" h4").text(fullName);
				}
			}
		}
	}
	connect.send();
	return j
}

$( document ).on( "click", ".elem ", function() {
	var boss = $(this).attr("id");
	var subFor = $(this).find("h4").text();
	$("#sub span").text(subFor);
	$("#sub").css("display","block");
	$(".grid").empty();
	show(boss);
});
function show(boss){
	var l = j.length;
	var n = 0;
	var other = [];
			for(i = 0; i<l; i++){
				if(j[i]["bossid"]==boss){
					$(".grid").append("<div class='elem-box'><div class='elem elem-"+i+"'><img><h4></h4><hr></div></div>");
					for (key in j[i]) {
						if(key=="avatar"){
							$(".elem-"+i+" img").attr("src",j[i][key]);
						}
						else if(key=="firstName"){
							var firstName = j[i][key];
						}
						else if(key=="lastName"){
							var lastName = j[i][key];
						}
						else if(key=="id"){
							if(j[i][key]){
								$(".elem-"+i).append("<p><b>"+key+": </b>"+j[i][key]+"</p>");
								$(".elem-"+i).attr("id",j[i][key]);
								other.push(j[i][key]);
							}
						}
						else if(key=="bossid"){
							if(j[i][key]){
								$(".elem-"+i).append("<p><b>"+key+": </b>"+j[i][key]+"</p>");
								$(".elem-"+i).attr("boss",j[i][key]);
							}
						}
						else{
							$(".elem-"+i).append("<p><b>"+key+": </b>"+j[i][key]+"</p>");
						}
						var fullName = firstName + " " + lastName;
						$(".elem-"+i+" h4").text(fullName);
					}
					n++;
				}
			}
			showOther(other);
			if(n==0){
				$("#error").css("opacity","1");
			}
}
function showOther(other){
	var l = j.length;
	var others = other.length;
	for(k=0; k<others; k++){
		for(i = 0; i<l; i++){
				if(j[i]["bossid"]==other[k]){
					$(".grid").append("<div class='elem-box'><div class='elem elem-"+i+"'><img><h4></h4><hr></div></div>");
					for (key in j[i]) {
						if(key=="avatar"){
							$(".elem-"+i+" img").attr("src",j[i][key]);
						}
						else if(key=="firstName"){
							var firstName = j[i][key];
						}
						else if(key=="lastName"){
							var lastName = j[i][key];
						}
						else if(key=="id"){
							if(j[i][key]){
								$(".elem-"+i).append("<p><b>"+key+": </b>"+j[i][key]+"</p>");
								$(".elem-"+i).attr("id",j[i][key]);
							}
						}
						else if(key=="bossid"){
							if(j[i][key]){
								$(".elem-"+i).append("<p><b>"+key+": </b>"+j[i][key]+"</p>");
								$(".elem-"+i).attr("boss",j[i][key]);
							}
						}
						else{
							$(".elem-"+i).append("<p><b>"+key+": </b>"+j[i][key]+"</p>");
						}
						var fullName = firstName + " " + lastName;
						$(".elem-"+i+" h4").text(fullName);
					}
				}
			}
	}
}