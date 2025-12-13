import React from 'react';
import myPhoto from '../../assets/avataaars.svg';

export default function Home() {
  return (
    <>
<section className="home-section">
<div className="container text-center">
<img className="hero-image" src={myPhoto} alt="" />
   <h1 className="home-title">START FRAMEWORK</h1>
        <p className="home-subtitle">
          Graphic Artist - Web Designer - Illustrator
        </p>

</div>
</section>

    </>
  );
}