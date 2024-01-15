// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home1 = () => {
  const featuredPets = [
    { id: 1, name: 'Buddy', species: 'Dog', image: 'dog1.jpg' },
    { id: 2, name: 'Whiskers', species: 'Cat', image: 'cat1.jpg' },
    { id: 3, name: 'Feathers', species: 'Parrot', image: 'parrot1.jpg' },
    // Add more featured pets as needed
  ];

  const filterPetsBySpecies = (species) =>
    featuredPets.filter((pet) => pet.species.toLowerCase() === species.toLowerCase());

  return (
    <div className="home-page">
      <div className="welcome-section">
        <h1>Welcome to Our Pet Store</h1>
        <p>Find your new furry friend with us!</p>
      </div>

      <div className="featured-pets-section">
        <h2>Featured Pets</h2>
        <div className="featured-pets">
          <div className="featured-pets-category">
            <h3>Puppies</h3>
            {filterPetsBySpecies('Dog').map((pet) => (
              <div key={pet.id} className="featured-pet">
                <img src={require('./images/puppy.jpg').default} alt={pet.name} />
                <h3>{pet.name}</h3>
                <p>{pet.species}</p>
                <Link to={`/pets/${pet.id}`}>View Details</Link>
              </div>
            ))}
          </div>

          <div className="featured-pets-category">
            <h3>Kitties</h3>
            {filterPetsBySpecies('Cat').map((pet) => (
              <div key={pet.id} className="featured-pet">
                <img src={require(`./images/kitten.jpg`).default} alt={pet.name} />
                <h3>{pet.name}</h3>
                <p>{pet.species}</p>
                <Link to={`/pets/${pet.id}`}>View Details</Link>
              </div>
            ))}
          </div>

          <div className="featured-pets-category">
            <h3>Other Animals</h3>
            {filterPetsBySpecies('Parrot').map((pet) => (
              <div key={pet.id} className="featured-pet">
                <img src={require(`./images/other.jpg`).default} alt={pet.name} />
                <h3>{pet.name}</h3>
                <p>{pet.species}</p>
                <Link to={`/pets/${pet.id}`}>View Details</Link>
              </div>
            ))}
          </div>

          <div className="featured-pets-category">
            <h3>Shelters and Rescue</h3>
            {/* Add your shelters and rescue pets here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
