//window.location='/';

/*
let username="akjshddkaisb";
let teamData="=== [gen7ou] Untitled 2 ===\n\
\n\
Alakazam-Mega @ Alakazite\n\
Ability: Trace";
let opponent="cxvxcvxzcvxz";
*/

window.addEventListener("message", function(event) {
/*
  if (event.origin != 'mmo-page') {
    // something from an unknown domain, let's ignore it
    return;
  }
*/
  console.log(event.data );

	if(event.data.type=="register"){

		//Register
		$('.button.mainmenu1.big').click()
		$('input[name="username"]').val(event.data.username)
		$('.buttonbar>button[type="submit"]').click()

	} else if(event.data.type=="challenge"){

		let teamData=event.data.pokemons;
		let opponent=event.data.opponent;

		//Create team
		$('[value="teambuilder"]').click();
		$('[name="backup"]').click();
		$('.teamedit>textarea').val(teamData);
		$('.savebutton').click();
		$('.fa-home').click();

		//Send challenge
		setTimeout(()=>{
		$("#lobby-userlist-user-"+opponent+">button").click();
		$(".buttonbar>button").click();
		$(".challenge>.battleform>p>.select.formatselect").click();
		$('[value="gen7ou"]').click();
		$(".buttonbar>button").click();
		}, 100);

	}

});

/*
//Accept
$(".buttonbar>button").click();





//Check winner
//You
$(".leftbar>.trainer>strong").first().text()
//Winner
$(".battle-log>.inner>.battle-history:last>strong").text()



//Check end battle
$('.battle-log').bind("DOMSubtreeModified",function(){
  if($(".battle-log>.inner>.battle-history:last").text().includes("won the battle!")){
	console.log("ended");
  }
});







//Useless
//Select team
$('.teamselect:not(.preselected)').click()
*/
