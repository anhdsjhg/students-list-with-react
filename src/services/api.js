const API_URL = 'https://690094e1ff8d792314ba9140.mockapi.io/students';
import axios from 'axios';

export const getStudents = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

export const createStudent = async (studentData) => {
    const response = await axios.post(API_URL, studentData);
    return response.data;
}

export const updateStudent = async (id, studentData) => {
    const response = await axios.put(`${API_URL}/${id}`, studentData);
    return response.data;
}

export const deleteStudent = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
}


