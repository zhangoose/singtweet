var c_note = new Audio(" {{ url_for('static', filename ='piano-c.wav') }}" );
var d_note = new Audio(" {{ url_for('static', filename ='piano-d.wav') }}" );
var e_note = new Audio(" {{ url_for('static', filename ='piano-e.wav') }}" );
var f_note = new Audio(" {{ url_for('static', filename ='piano-f.wav') }}" );
var g_note = new Audio(" {{ url_for('static', filename ='piano-g.wav') }}" );
var a_note = new Audio(" {{ url_for('static', filename ='piano-a.wav') }}" );
var b_note = new Audio(" {{ url_for('static', filename ='piano-b.wav') }}" );

var aa_notes = {'a': a_note, 'b': b_note, 'c': c_note, 'd': d_note, 'e': e_note, 'f': f_note, 'g': g_note};

/**
 * recursive function to play notes until sounds array is empty
 */
function play_da_tunes(sounds){
	if(sounds.length == 0){
		return;
	}//end of base case 
	setTimeout(function(){
		note = aa_notes[sounds.shift()];
		note.play();
		play_da_tunes(sounds);
	},900);
}//end of playdatunes

/**
 * populate the notes from the python that was outputted onto the HTML
 */
function pop_notes(){
	var notes = [];
	$(".notes").each(function(){
		notes.push($(this).text().trim());
	});
	return notes;
}

$(document).ready(function(){
	notes = pop_notes();
	play_da_tunes(notes);
});
