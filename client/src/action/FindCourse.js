import React, { useState } from 'react';

function FindCourse() {
  const [courseName, setCourseName] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5050/catalog/search?courseName=${courseName}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error searching for courses:', error);
    }
  };

  return (
    <div>
      <h1>Find Course</h1>
      <label htmlFor="courseName">Course Name:</label>
      <input type="text" id="courseName" value={courseName} onChange={(e) => setCourseName(e.target.value)} required />
      <button type="button" onClick={handleSearch}>Search</button>

      <ul>
        {searchResults.map((result) => (
          <li key={result.ID}><strong>{result.CourseID}</strong> {result.CourseName}</li>
        ))}
      </ul>
    </div>
  );
}

export default FindCourse;
