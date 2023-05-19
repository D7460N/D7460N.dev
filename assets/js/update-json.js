// This script fetches tweets and writes them to a JSON file

// import required packages
const Twit = require('twit');
const fs = require('fs');

// set up Twit with your Twitter API keys
const T = new Twit({
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_API_SECRET_KEY,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
});

// specify parameters for the search
let params = {
  q: 'from:@dragontheory',  // replace @yourTwitterHandle with your actual handle
  count: 10  // get 10 tweets
}

// perform the search and save results to a JSON file
T.get('search/tweets', params, (err, data, response) => {
  if (err) {
    console.error('Error fetching tweets:', err);
  } else {
    const tweets = data.statuses.map(status => ({
      text: status.text,
      created_at: status.created_at,
      url: `https://twitter.com/${status.user.screen_name}/status/${status.id_str}`
    }));
    fs.writeFile('./assets/js/articles.json', JSON.stringify(tweets, null, 2), (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Successfully wrote tweets to file.');
      }
    });
  }
});
