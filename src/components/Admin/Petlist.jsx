import React, { useState } from 'react';

const Petlist = ({ pets, deletePet, editPet }) => {
  const [editMode, setEditMode] = useState(null);
  const [editedPet, setEditedPet] = useState({
    name: '',
    species: '',
    Id: '',
    Age: '',
    Gender: '',
    Breed: '',
    Color: '',
  });

  const handleEditClick = (pet) => {
    setEditMode(pet.Id);
    setEditedPet(pet);
  };

  const handleSaveEdit = () => {
    editPet(editedPet);
    setEditMode(null);
    setEditedPet({
      name: '',
      species: '',
      Id: '',
      Age: '',
      Gender: '',
      Breed: '',
      Color: '',
    });
  };

  return (
    <div className="pet-list">
      <h2>Pet List</h2>
      <ul>
        {pets.map((pet) => (
          <li key={pet.Id} className="pet-item">
            <div className="pet-details">
              <strong>Name:</strong> {pet.name} | 
              <strong>Species:</strong> {pet.species} |
              <strong>ID:</strong> {pet.Id} |
              <strong>Age:</strong> {pet.Age} |
              <strong>Gender:</strong> {pet.Gender} |
              <strong>Breed:</strong> {pet.Breed} |
              <strong>Color:</strong> {pet.Color}
            </div>
            <div className="pet-actions">
              <button onClick={() => deletePet(pet.name)}>Delete</button>
              <br/>
              <br/>
              
              <button onClick={() => handleEditClick(pet)}>Edit</button>
            </div>
            {editMode === pet.Id && (
              <div className="edit-form">
                <label>Name:</label>
                <input
                  type="text"
                  value={editedPet.name}
                  onChange={(e) => setEditedPet({ ...editedPet, name: e.target.value })}
                />
                {/* Add other fields for species, ID, age, gender, breed, and color */}
                <button onClick={handleSaveEdit}>Save</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Petlist;
