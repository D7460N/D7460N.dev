const Twit = require('twit');
const fs = require('fs');

const T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms: 60*1000,
  strictSSL: true,
});

T.get('statuses/user_timeline', { screen_name: 'dragontheory', count: 10 }, (err, data, response) => {
  if (err) {
    console.error('Error fetching tweets:', err);
  } else {
    const articles = data.map(tweet => ({
      // transform tweet data to your article schema
      ...tweet,  // Include all fields from the tweet
      url: `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`  // Add the "url" field
    }));

    fs.writeFile('./assets/js/articles.json', JSON.stringify(articles, null, 2), (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Successfully wrote tweets to file.');
      }
    });
  }
});
