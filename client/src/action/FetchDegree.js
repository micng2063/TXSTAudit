import axios from 'axios';

const degreeCode = {
  'Biochemistry': 'biochem',
  'Chemistry': 'chemistry',
  'Computer Science': 'compsci',
  'Civil Engineering': 'civil',
  'Electrical Engineering (CS Concentrated)': 'electricalcs',
  'Electrical Engineering (Micro/Nano Concentrated)': 'electricalmn',
  'Industrial Engineering': 'industrial',
  'Manufacturing Engineering': 'manufact',
  'Mechanical Engineering': 'mechanical',
};

const fetchDegree = async (degree) => {
  try {
    const response = await axios.get(`http://localhost:5050/scrape/${degreeCode[degree]}`);
    console.log(`Scraped data for ${degree}:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data for degree:`, error);
    throw error; // Re-throw the error to handle it in the component
  }
};

export { fetchDegree, degreeCode };
