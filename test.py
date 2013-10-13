import tweepy
from flask import Flask, render_template
from tweepy import OAuthHandler

auth = tweepy.OAuthHandler("rANvChN8zCxKbJQGmqNn4Q","fIvWCneiBqTIK6Ib0aYWNpqGeBk8lDZrwVv5VUYbYA")
auth.set_access_token("1890876067-a9vKw3b73SjyUvSl4TD5FjncU60n5B6bHnnbhiH","3iAEHa7WJAsmjvjVcTioyLo7vG8h1noKJeMLWzyo6E")

api= tweepy.API(auth)
app = Flask(__name__)


@app.route('/')
def wrong():
	return render_template("wrong.html");

@app.route('/<username>')
def hello(username):

	#user = api.get_user("dproi")
	user = api.get_user(username)
	
	status = user.status
	print status.text

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
