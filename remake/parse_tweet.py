"""
gets the most frequent occurring note 
aka key with the highest value in t_dict
return that note 
"""
def freq_note_det(t_dict):
    so_result = sorted(t_dict, key=t_dict.get, reverse=True)
    return so_result[0]

"""
converts ONE tweet's letters to abcdefg
populates dictionary that holds {note: #times}
returns that dictionary
"""
def pop_note_dict(tweet):
    note_stats = {'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0}
    good_alpha = ['a','b','c','d','e','f','g'] 
    
    for ch in tweet:
        if ch in good_alpha:
            note_stats[ch] += 1
        else:
            ascii_alpha = ord(ch)-97
            good_ch = good_alpha[ascii_alpha % 7]
            note_stats[good_ch] += 1
    return note_stats

"""
populates notes array for entire tweet array
"""
def parse_me(tweet_arr):
    notes = []
    for tweet in tweet_arr:
        tweet_dict = pop_note_dict(tweet)
        most_note = freq_note_det(tweet_dict)
        notes.append(most_note)
    return notes
    
