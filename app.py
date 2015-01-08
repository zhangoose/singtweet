import tweepy
from flask import Flask, render_template
from tweepy import OAuthHandler

auth = tweepy.OAuthHandler(CONSUMER_TOKEN,CONSUMER_SECRET)
auth.set_access_token(ACCESS_TOKEN,ACCESS_SECRET)

api= tweepy.API(auth)
app = Flask(__name__)


@app.route('/')
def wrong():
	return render_template("wrong.html");

@app.route('/<username>')
def hello(username):

	user = api.get_user(username)
	
	time = user.timeline()

	tweetArr = []
	string = ""
	count = 0

	for tweets in time:
		if count < 12:	
			texty = tweets.text
			texty = texty.replace("'", '').strip()
			texty = texty.replace('"', '').strip()
			texty = texty.replace('\n','').strip()
			tweetArr.append(texty)
			string = string + texty
			count = count + 1


	return render_template("main.html", tweetArr = tweetArr, username = username) 

if __name__ == "__main__":
	app.debug = True
	app.run()
