var me = {};
me.avatar = "./img/agent.jpg";

var you = {};
you.avatar = "./img/photo.jpg";

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}            

//-- No use time. It is a javaScript effect.
function insertChat(who, text, time){
    if (time === undefined){
        time = 0;
    }
    var control = "";
    var date = formatAMPM(new Date());
    
    if (who == "me"){
        control = '<li style="width:100%">' +
                        '<div class="msj macro">' +
                        '<div class="avatar"><img class="rounded-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
                            '<div class="text text-l">' +
                                '<p>'+ text +'</p>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '</div>' +
                    '</li>'; 
		control2 = '<li style="width:100%">' +
                        '<div class="msj-rta macro">' +                        
                            '<div class="text text-r">' +
                                '<p>'+ text +'</p>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
			                 '<div class="avatar"><img class="rounded-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
                        '</div>' +
                    '</li>'; 
    }else{
        control = '<li style="width:100%;">' +
                        '<div class="msj-rta macro">' +
                            '<div class="text text-r">' +
                                '<p>'+text+'</p>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                          '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="rounded-circle" style="width:100%;" src="'+you.avatar+'" /></div>' +                     '</div>' + 
                  '</li>';
		control2 = '<li style="width:100%;">' +
                        '<div class="msj macro">' +
			             '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="rounded-circle" style="width:100%;" src="'+you.avatar+'" /></div>' + 
                            '<div class="text text-l">' +
                                '<p>'+text+'</p>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '</div>' + 
                  '</li>';
    }
    setTimeout(
        function(){                        
            $("ul.client_list").append(control).scrollTop($("ul").prop('scrollHeight'));
			$("ul.agent_list").append(control2).scrollTop($("ul").prop('scrollHeight'));
        }, time);
    
}

function resetChat(){
    $("ul").empty();
}

$(".mytext").on("keydown", function(e){
    if (e.which == 13){
        var text = $(this).val();
        if (text !== ""){
			
			
			
            insertChat("you", text);              
            $(this).val('');
			
        }
    }
});
$(".mytext2").on("keydown", function(e){
    if (e.which == 13){
        var text = $(this).val();
        if (text !== ""){
            insertChat("me", text);              
            $(this).val('');
        }
    }
});

$('.send').click(function(){
	
    $(".mytext").trigger({type: 'keydown', which: 13, keyCode: 13});
});
$('.send2').click(function(){
	
    $(".mytext2").trigger({type: 'keydown', which: 13, keyCode: 13});
});
//-- Clear Chat
resetChat();
 /* var time;
 if (time === undefined){
        time = 0;
    }
    var control = "";
    var date = formatAMPM(new Date());

//session storage
var chat ={'who':'me','chat':'test','time':date, id: 7  }; 
 var jchat = JSON.stringify(chat); 
 var Add_key = chat.id;
 sessionStorage.setItem(Add_key, jchat);


 re_Obj = sessionStorage.getItem('7');	
		  
          mydata = JSON.parse(re_Obj);
	   
	      var chat1 = mydata.chat;
          var time1 = mydata.time;*/
//-- Print Messages
//insertChat("me", chat1, time1);  
//insertChat("you", "Hi, Pablo", 1500);
//insertChat("me", "What would you like to talk about today?", 3500);
//insertChat("you", "Tell me a joke",7000);
//insertChat("me", "Spaceman: Computer! Computer! Do we bring battery?!", 9500);
//insertChat("you", "LOL", 12000);
//insertChat("me", "Spaceman: Computer! Computer! Do we bring battery?!", 9500);
//insertChat("you", "LOL", 12000);

//-- NOTE: No use time on insertChat.