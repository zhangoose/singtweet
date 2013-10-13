var goodAlpha = ["C", "D", "E", "F", "G", "A", "B"];
var badAlpha = ["H", "I", "J", "K", "L", "M", "N", "O","P", "Q", "R", "S", "T", "U","V","W","X","Y","Z"];

var gNotes = new Array();

var c_note = new Audio(" {{ url_for('static', filename ='piano-c.wav') }}" );
var d_note = new Audio(" {{ url_for('static', filename ='piano-d.wav') }}" );
var e_note = new Audio(" {{ url_for('static', filename ='piano-e.wav') }}" );
var f_note = new Audio(" {{ url_for('static', filename ='piano-f.wav') }}" );
var g_note = new Audio(" {{ url_for('static', filename ='piano-g.wav') }}" );
var a_note = new Audio(" {{ url_for('static', filename ='piano-a.wav') }}" );
var b_note = new Audio(" {{ url_for('static', filename ='piano-b.wav') }}" );

/**
 * a shitton of nested settimeout functions.
 * yeah.
 * and plays.
 * the thing that acutally plays.
 * reutrn void.
 */
function playDaTunes(sounds){
	setTimeout(function(){
		setTimeout(function(){
			console.log("sound 0");
			sounds[0].play();
			setTimeout(function(){
				console.log("sound 1");
				sounds[1].play();
				setTimeout(function(){
					console.log("sound 2");
					sounds[2].play();
					setTimeout(function(){
						console.log("sound 3");
						sounds[3].play();
						setTimeout(function(){
							console.log("sound 4");
							sounds[4].play();
							setTimeout(function(){
								console.log("sound 5");
								sounds[5].play();
								setTimeout(function(){
									console.log("sound 6");
									sounds[6].play();
									setTimeout(function(){
										console.log("sound 7");
										sounds[7].play();
										setTimeout(function(){
											console.log("sound 8");
											sounds[8].play();
											setTimeout(function(){
												console.log("sound 9");
												sounds[9].play();
												setTimeout(function(){
													console.log("sound 10");
													sounds[10].play();
													setTimeout(function(){
														console.log("sound 11");
														sounds[11].play();
													},900)
												},900)
											},900)
										},900)
									},900)
								},900)
							},900)
						}, 900)
					}, 900)
				},900)
			},900)
		},900)
	},900)

}//end of playDaTunes

/**
 * for loops thru all tweets
 * runs the most count etc functions on all
 * populates global var gNotes
 */
function allDaTweets(allArr){
	var i;
	for(i = 0; i< allArr.length; i++){
		var tempArr = oneTweet(allArr[i]);
		mostCount(tempArr);
	}//end of for 
	console.log("gNotes is " + gNotes);
	
}//end of allDatweets

/**
 * tells you the note that came up the most
 * takes array of melody from oneTweet()
 * returns: greatNote string
 */
function mostCount(melArr){
	var greatest = 0;
	var i;
	for(i = 0; i < melArr.length; i++){
		if(melArr[i] > melArr[greatest]){
			greatest = i;
		}//end of if
	}//end of for 

	// converting int --> char
	var greatNote;
	greatNote = goodAlpha[greatest];
	console.log("greatNote is " +greatNote);
	gNotes.push(greatNote);
	return greatNote;
}//end of mostCount

/**
 * parses one tweet generates array of counted
 * letters and stuff.
 * takes in a tweet string.
 * return: melody array of INTS
 */
function oneTweet(tweet){

	var melody = [0,0,0,0,0,0,0];
	// C D E F G A B
	// 0 1 2 3 4 5 6

	var i;
	var j;
	var done;

	for(i = 0; i < tweet.length; i++){
		for(j = 0; j < goodAlpha.length; j++){
			if(tweet[i].toUpperCase() == goodAlpha[j]){
				//console.log("letter: " + tweet[i]);
				melody[j]++;	
			}//end of if 
		}//end of for
		
		for(j =0; j < badAlpha.length; j++){
			if(tweet[i].toUpperCase() == badAlpha[j]){
				melody[j%7]++;

			}//end of if
		}//end of for
	}//end of for

	console.log(melody);
	return melody;

}//end of onetweet function


function init(){
//	var arr = oneTweet(poop2);

//	mostCount(arr);
//	console.log("gNotes is " + gNotes);
	
	var i;
	var tempTweetArr = new Array();
	tempTweetArr.push( '{{ tweetArr[0] }}' );
	tempTweetArr.push( '{{ tweetArr[1] }}' );
	tempTweetArr.push( '{{ tweetArr[2] }}' );
	tempTweetArr.push( '{{ tweetArr[3] }}' );
	tempTweetArr.push( '{{ tweetArr[4] }}' );
	tempTweetArr.push( '{{ tweetArr[5] }}' );
	tempTweetArr.push( '{{ tweetArr[6] }}' );
	tempTweetArr.push( '{{ tweetArr[7] }}' );

	tempTweetArr.push( '{{ tweetArr[8] }}' );
	tempTweetArr.push( '{{ tweetArr[9] }}' );
	tempTweetArr.push( '{{ tweetArr[10] }}' );
	tempTweetArr.push( '{{ tweetArr[11] }}' );
/*	
	tempTweetArr.push( '{{ tweetArr[12] }}' );
	tempTweetArr.push( '{{ tweetArr[13] }}' );
*/
	
	//var tempArr = oneTweet(
	console.log(tempTweetArr);

	allDaTweets(tempTweetArr);

	var soundArr = new Array();
	for(i = 0; i < gNotes.length; i++){
		if(gNotes[i] == "A"){
			soundArr.push(a_note);
		}else if(gNotes[i] == "B"){
			soundArr.push(b_note);
		}else if(gNotes[i] == "C"){
			soundArr.push(c_note);
		}else if(gNotes[i] == "D"){
			soundArr.push(d_note);
		}else if(gNotes[i] == "E"){
			soundArr.push(e_note);
		}else if(gNotes[i] == "F"){
			soundArr.push(f_note);
		}else if(gNotes[i] == "G"){
			soundArr.push(g_note);
		}else{
			console.log("uhh");
		}
	}//end of for
	
	playDaTunes(soundArr);

}//end of init


init();
