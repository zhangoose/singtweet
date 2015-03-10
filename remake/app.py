import tweepy
from flask import Flask, render_template
from tweepy import OAuthHandler
import mine # for tokens
import re # regex
import parse_tweet #to parse

auth = tweepy.OAuthHandler(mine.CONSUMER_TOKEN, mine.CONSUMER_SECRET)
auth.set_access_token(mine.ACCESS_TOKEN, mine.ACCESS_SECRET)

twitter = tweepy.API(auth)
app = Flask(__name__)


@app.route('/')
def wrong():
    return render_template("wrong.html");

@app.route('/<username>')
def launch(username):
    user = twitter.get_user(username)
    time = user.timeline()

    tweet_arr = []
    orig_tweet_arr = []
    count = 0

    for tweets in time:
        if count < 12:	
            orig_tweet_arr.append(tweets.text)
            regex = re.compile('[^a-zA-Z]')
            new_text = regex.sub('',tweets.text)
            tweet_arr.append(new_text.lower())
            count = count + 1

    notes = parse_tweet.parse_me(tweet_arr)

    return render_template("index.html", orig_tweet_arr = orig_tweet_arr, username = username, notes = notes) 

if __name__ == "__main__":
    app.debug = True
    app.run()
