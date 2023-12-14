import { useEffect, useState } from 'react';
import axios from 'axios';

function Course() {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5050/scrape')
      .then((response) => {
        setCourseData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching course data', error);
      });
  }, []);

  return (
    <div>
      <h1>Scraped Course Table</h1>
      {courseData.map(({ tableHTML }, index) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: tableHTML }} />
      ))}
    </div>
  );
}

export default Course;
