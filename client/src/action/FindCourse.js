const FindCourse = async (courseCode) => {
  try {
    const response = await fetch(`http://localhost:5050/catalog/search?courseCode=${courseCode}`);
    const data = await response.json();
    if (data.length > 0) {
      return data[0].CourseName;
    } else {
      return 'No information';
    }
  } catch (error) {
    console.error('Error searching for courses:', error);
    throw error;
  }
};

export default FindCourse;