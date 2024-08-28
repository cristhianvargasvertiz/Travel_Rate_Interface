
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
      handleLike: () => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      },
      handleDislike: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      }
    };
  }
  render() {
    return (
      <>
        <h1 className='title'>🌴 Travel Rating Interface 🌴</h1>
        <p className='subtitle'>by Cristhian Vargas</p>
        
        <div className='content-rating'>
          <h3>Behind The App</h3>
          <p>"Travel Rating Interface" is a web app inspired by my wife,
             Mariela Callaway, and one of our trips to Tulum, Mexico 🇲🇽.
             Designed for travelers to share their experiences, rate destinations,
             and provide more authentic feedback through a like 👍🏻 and dislike 👎🏻 system,
             the app also allows users to take a screenshot of their results to easily
             share across various social media platforms. Developed with React and Vite,
             this platform combines an intuitive design with real-time functionality,
             showcasing my skills in web development. The project is available on my GitHub,
             inviting other developers to explore the code, collaborate, and contribute
             new ideas to enhance this experience.</p>
        </div>
        
        <div className="padre">
          
          <div className="input"><br></br>
            <label htmlFor="user-text">Enter trip destination:</label><br></br><br></br>
            <textarea id="user-text" rows="4" cols="20" placeholder="Enter the place... e.g. Tulum"></textarea>
          </div>
          
          <div className='question'>
              <h2>Gastronomy</h2>
              <h2>🍔 🌮 🍱 🍣 🥗</h2>
              <p>· Taste · Variety · Quality · Value · Ingredients ·</p>
          
            <div className='rating-buttons'>
              
              <button className="like-button" onClick={this.state.handleLike}>
                Like ({this.state.likes})
              </button>

              <button className="dislike-button" onClick={this.state.handleDislike}>
                Dislike ({this.state.dislikes})
              </button>

              <div>
                <p>Total Ratings: {this.state.totalRatings}</p>
              </div>
              
            </div>  
          </div>
        
          <div className='question'>
              <h2>Prices</h2>
              <h2>💵 💳 💰 🚕 🛩</h2>
              <p>· Currency · Accommodation · Shopping · Activities · Transport ·</p>
          
            <div className='rating-buttons'>
              
              <button className="like-button" onClick={this.state.handleLike}>
                Like ({this.state.likes})
              </button>

              <button className="dislike-button" onClick={this.state.handleDislike}>
                Dislike ({this.state.dislikes})
              </button>

              <div>
                <p>Total Ratings: {this.state.totalRatings}</p>
              </div>
              
            </div>  
          </div>

          <div className='question'>
              <h2>Safety</h2>
              <h2>🚔 🚨 🚑 👮🏻‍♀️ 🚑</h2>
              <p>· Surveillance · Services · Incidents · Police ·</p>
          
            <div className='rating-buttons'>
              
              <button className="like-button" onClick={this.state.handleLike}>
                Like ({this.state.likes})
              </button>

              <button className="dislike-button" onClick={this.state.handleDislike}>
                Dislike ({this.state.dislikes})
              </button>

              <div>
                <p>Total Ratings: {this.state.totalRatings}</p>
              </div>
              
            </div>  
          </div>

          
          <div className='question'>
              <h2>Entertainment</h2>
              <h2>📍 🎭 🏄🏻‍♂️ 🍹</h2>
              <p>· Landmarks · Nightlife · Culture · Activities ·</p>
          
            <div className='rating-buttons'>
              
              <button className="like-button" onClick={this.state.handleLike}>
                Like ({this.state.likes})
              </button>

              <button className="dislike-button" onClick={this.state.handleDislike}>
                Dislike ({this.state.dislikes})
              </button>

              <div>
                <p>Total Ratings: {this.state.totalRatings}</p>
              </div>
              
            </div>  
          </div>

          <div className='question'>
              <h2>Transport</h2>
              <h2>🚅 🚌 🚕 🛵</h2>
              <p>· Comfort · Availability · Punctuality · Accessibility ·</p>
          
            <div className='rating-buttons'>
              
              <button className="like-button" onClick={this.state.handleLike}>
                Like ({this.state.likes})
              </button>

              <button className="dislike-button" onClick={this.state.handleDislike}>
                Dislike ({this.state.dislikes})
              </button>

              <div>
                <p>Total Ratings: {this.state.totalRatings}</p>
              </div>
              
            </div>  
          </div>

          <div className='question'>
              <h2>Hospitality</h2>
              <h2>👨🏻‍🦽 🧑🏻‍🦯 🙋🏻 🌟</h2>
              <p>· Assistance · Welcome · Friendliness · Service ·</p>
          
            <div className='rating-buttons'>
              
              <button className="like-button" onClick={this.state.handleLike}>
                Like ({this.state.likes})
              </button>

              <button className="dislike-button" onClick={this.state.handleDislike}>
                Dislike ({this.state.dislikes})
              </button>

              <div>
                <p>Total Ratings: {this.state.totalRatings}</p>
              </div>
              
            </div>  
          </div>

          <div className='question'>
              <h2>Cleanliness</h2>
              <h2>♻️ 🗑 🌴 🏙</h2>
              <p>· Streets · Waste · Beaches · Recycle ·</p>
          
            <div className='rating-buttons'>
              
              <button className="like-button" onClick={this.state.handleLike}>
                Like ({this.state.likes})
              </button>

              <button className="dislike-button" onClick={this.state.handleDislike}>
                Dislike ({this.state.dislikes})
              </button>

              <div>
                <p>Total Ratings: {this.state.totalRatings}</p>
              </div>
              
            </div>  
          </div>
          
          



        </div>
      </>   
    );
  }
}

export default ContentRating;