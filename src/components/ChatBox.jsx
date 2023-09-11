import React from 'react'

const ChatBox = ({text,analyzeSentiment,sentimentResult,sentimentScore,handleTextChange}) => {
  return (
    <div className='sentiment-box'>
      <h2>Sentiment Analysis</h2>
      
      <div chats>
        <div className='left-chats'>
          <div className='chat1'>
            <p>hii ..how r u</p>
          </div>
        
        </div>
        <div className='right-chats'>
          <div className='chat1'>
            <p>Hello ..i am .Thanks for asking hope you r good too</p>
          </div>
        
        </div>
        <div className='left-chats'>
          <div className='chat1'>
            <p>hii ..how r u</p>
          </div>
        
        </div>
      </div>
    <div className="text-area">
      <textarea
        placeholder="Enter text for sentiment analysis..."
        rows="2"
        cols="60"
        value={text}
        onChange={handleTextChange}
      />
      <button onClick={analyzeSentiment}>Analyze</button>
      </div>
      {/* {sentimentScore !== 0 && (
        <div>
          <h3>Analysis Result:</h3>
          <p>
            Sentiment Score: {sentimentScore} ({sentimentResult})
          </p>
        </div>
        
      )} */}
      <div>
  
          {/* <h3>Filtered Text:</h3>
          <p>
            {filteredText}
          </p> */}
        </div>
    </div>
  )
}

export default ChatBox