import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import axios from "axios";

const News = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const accessToken = 'IGQWRPNUtleG1uTDJMSmJXZAVZAnOWxmLXIxR01mVVVyZAWtrYVhsd3FSaDhEby1YUm50YmJ4a3pHdUI0eE9RZA081YkFBbE8xa3cwZA1BSRFJfOWVrcUpnd1A0Qks0eEhqdWNQWGlpdks4Y2M5bWJFaE5vaFZAIMWRjSE0ZD';
    const apiUrl = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=${accessToken}`;

    axios.get(apiUrl)
      .then(response => {
        setPosts(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching Instagram posts:', error);
      });
  }, []);


  const options = {
    autoplay: true,
    dots: false,
    responsive: {
      0: {
        items: 2,
        margin: 10,
        nav: false,
      },
      600: {
        items: 2,
        margin: 10,
        nav: false,
      },
      1024: {
        items: 4,
        margin: 30,
        nav: false,
      },
    },
  };
  console.log("posts", posts)
  return (
    <div className="news">
      <OwlCarousel className="owl-theme" {...options}>
        {posts.map(post => (
          <div key={post.id} className="instagram-post">
            <img src={post.media_url} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};


//IGQWRPNUtleG1uTDJMSmJXZAVZAnOWxmLXIxR01mVVVyZAWtrYVhsd3FSaDhEby1YUm50YmJ4a3pHdUI0eE9RZA081YkFBbE8xa3cwZA1BSRFJfOWVrcUpnd1A0Qks0eEhqdWNQWGlpdks4Y2M5bWJFaE5vaFZAIMWRjSE0ZD
export default News;
