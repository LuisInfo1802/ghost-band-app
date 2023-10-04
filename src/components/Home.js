import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-title">¿What is this Web?</h2>
      <div className="home-content">
        <div className="home-text">
          <p className="band-description">
          This website was developed for the purpose of practicing the creation and use of REST APIs and React JS, utilizing technologies such as HTML, CSS, JS, NodeJS, and MySQL. In each section of the page, you will find songs, albums, and members that make up this band, fetched by making requests to the API to display the results to the end user interactively. <br></br> <br></br>

The implementation of a REST API enables effective communication between the frontend developed with React JS and the backend built using NodeJS and MySQL. By using HTML and CSS, an attractive and easy-to-navigate visual interface has been achieved, providing users with an optimal experience while exploring information about the songs, albums, and band members.          </p>
        </div>
        <div className="home-image">
          <img src="https://cdns-images.dzcdn.net/images/artist/4cfad4049e78f8055bb8b5c413bb7c83/500x500.jpg" alt="Ghost Band" />
        </div>
      </div>

      <div className="about-ghost-section">
        <h2 className="home-title">About Ghost band</h2>
        <div className="home-text">
          <p className="band-description">
            Ghost is a Swedish rock band founded in 2006. Known for their enigmatic stage presence and unique musical style, Ghost has gained followers worldwide. Their music blends elements of rock, metal, and pop with dark and mysterious lyrics.
          </p>
          
        </div>
        <div className="band-image">
          <img src="https://ca-times.brightspotcdn.com/dims4/default/ec316f8/2147483647/strip/true/crop/4564x3042+383+0/resize/2000x1333!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F72%2Fd7%2F879b8aca4196bc5e8f4bc754acce%2F922844-la-et-ms-swedish-metal-band-ghost-5-brv.jpg" alt="Ghost Band" />
        </div>
      </div>

      
    </div>
  );
};

export default Home;
