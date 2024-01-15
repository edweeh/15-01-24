import React, { useState } from 'react';
import './petform.css'; // You can create a CSS file for styling

const Petform = ({ addPet }) => {
  const [petName, setPetName] = useState('');
  const [petSpecies, setPetSpecies] = useState('');
  const [petId, setPetId] = useState('');
  const [petAge, setPetAge] = useState('');
  const [petGender, setPetGender] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [petColor, setPetColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPet({
      name: petName,
      species: petSpecies,
      Id: petId,
      Age: petAge,
      Gender: petGender,
      Breed: petBreed,
      Color: petColor,
    });
    setPetName('');
    setPetSpecies('');
    setPetId('');
    setPetAge('');
    setPetGender('');
    setPetBreed('');
    setPetColor('');
  };

  return (
    <div className="pet-card">
      <h2>Add Pet</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Pet Name:</label>
          <input
            type="text"
            placeholder="Pet Name"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Species:</label>
          <input
            type="text"
            placeholder="Species"
            value={petSpecies}
            onChange={(e) => setPetSpecies(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Id:</label>
          <input
            type="text"
            placeholder="Id"
            value={petId}
            onChange={(e) => setPetId(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input
            type="text"
            placeholder="Age"
            value={petAge}
            onChange={(e) => setPetAge(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <input
            type="text"
            placeholder="Gender"
            value={petGender}
            onChange={(e) => setPetGender(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Breed:</label>
          <input
            type="text"
            placeholder="Breed"
            value={petBreed}
            onChange={(e) => setPetBreed(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Color:</label>
          <input
            type="text"
            placeholder="Color"
            value={petColor}
            onChange={(e) => setPetColor(e.target.value)}
            required
          />
        </div>

        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
};

export default Petform;
