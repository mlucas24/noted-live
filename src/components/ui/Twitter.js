import React from 'react';
import { TwitterTimelineEmbed,
    TwitterFollowButton, 
    TwitterMentionButton, 
    } from 'react-twitter-embed';

const Twitter = () => {
    return (
        <>
        <TwitterTimelineEmbed
  sourceType="profile"
  screenName="MattLucasCodes"
  options={{height: 400}}
/>
<TwitterMentionButton
    screenName={'MattLucasCodes'}
  />
  <TwitterFollowButton
    screenName={'MattLucasCodes'}
  />
    </>
    )
}

export default Twitter;