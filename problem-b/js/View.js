'use strict';

export function printTweets(tweetArray) {
    if (tweetArray.length == 0) {
        console.log("No tweets found");
    }
    for(let tweet of tweetArray) {
        let time = new Date(tweet.timestamp);
        console.log('- "' + tweet.text + '" (' + time.toLocaleString("en-US") + ')');
    }
}