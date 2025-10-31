import { useState, useEffect } from "react";
import { getStudents } from "./services/api";
import { StudentList } from "./components/StudentList";
import { Modal } from "./components/Modal";
import { createStudent, updateStudent, deleteStudent } from "./services/api";

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filterGroup, setFilterGroup] = useState("all");
  const [filterAge, setFilterAge] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 9;
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    async function fetchData() {
      const data = await getStudents();
      console.log(data);
      setStudents(data);
    }
    fetchData();
  }, []);

  function handleCardClick(student) {
    setSelectedStudent(student);
    setIsModalOpen(true);
  }

  const handleSaveStudent = async (updatedStudent) => {
    try {
      if (updatedStudent.id) {
        const savedStudent = await updateStudent(
          updatedStudent.id,
          updatedStudent
        );
        setStudents((prev) =>
          prev.map((s) => (s.id === savedStudent.id ? savedStudent : s))
        );
      } else {
        const savedStudent = await createStudent(updatedStudent);
        setStudents((prev) => [...prev, savedStudent]);
      }
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving student:", error);
    }
  };

  const handleDeleteStudent = async (id) => {
    try {
      await deleteStudent(id);
      setStudents((prev) => prev.filter((s) => s.id !== id));
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleAddStudent = async (studentData) => {
    const newStudent = {
      name: formData.get("name").trim(),
      email: formData.get("email").trim(),
      age: Number(formData.get("age")), 
      group: formData.get("group"),
      avatar: formData.get("avatar") || "https://via.placeholder.com/150",
    };

    try {
      const savedStudent = await createStudent(studentData); 
      setStudents([...students, savedStudent]);
      setIsAddModalOpen(false);
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <div
      className={`min-h-screen p-4 md:p-10 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4 md:gap-0">
        <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left text-blue-400">
          Students List
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full md:w-auto">
          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`w-full sm:w-64 border rounded-lg px-4 py-2 outline-none focus:ring-2 
    ${
      theme === "dark"
        ? "border-gray-600 focus:ring-blue-500 text-gray-200 bg-gray-800"
        : "border-gray-300 focus:ring-blue-400 text-gray-900 bg-white"
    }`}
          />

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`w-full sm:w-64 border rounded-lg px-4 py-2 cursor-pointer
    ${
      theme === "dark"
        ? "border-gray-600 focus:ring-blue-500 text-gray-200 bg-gray-800"
        : "border-gray-300 focus:ring-blue-400 text-gray-900 bg-white"
    }`}
          >
            {theme === "dark" ? "🌝 Light Mode" : "🌚 Dark Mode"}
          </button>

          {/* Group Filter */}
          <select
            value={filterGroup}
            onChange={(e) => setFilterGroup(e.target.value)}
            className={`w-full sm:w-64 border rounded-lg px-4 py-2 outline-none focus:ring-2 
    ${
      theme === "dark"
        ? "border-gray-600 focus:ring-blue-500 text-gray-200 bg-gray-800"
        : "border-gray-300 focus:ring-blue-400 text-gray-900 bg-white"
    }`}
          >
            <option
              value="all"
              className={`${
                theme === "dark" ? "text-gray-200" : "text-gray-900"
              }`}
            >
              All Groups
            </option>
            <option
              value="3F1"
              className={`${
                theme === "dark" ? "text-gray-200" : "text-gray-900"
              }`}
            >
              3F1
            </option>
            <option
              value="3F2"
              className={`${
                theme === "dark" ? "text-gray-200" : "text-gray-900"
              }`}
            >
              3F2
            </option>
            <option
              value="3F3"
              className={`${
                theme === "dark" ? "text-gray-200" : "text-gray-900"
              }`}
            >
              3F3
            </option>
            <option
              value="3F4"
              className={`${
                theme === "dark" ? "text-gray-200" : "text-gray-900"
              }`}
            >
              3F4
            </option>
          </select>

          {/* Age Filter */}
          <select
            value={filterAge}
            onChange={(e) => setFilterAge(e.target.value)}
            className={`w-full sm:w-64 border rounded-lg px-4 py-2 outline-none focus:ring-2 
    ${
      theme === "dark"
        ? "border-gray-600 focus:ring-blue-500 text-gray-200 bg-gray-800"
        : "border-gray-300 focus:ring-blue-400 text-gray-900 bg-white"
    }`}
          >
            <option
              value="all"
              className={`${
                theme === "dark" ? "text-gray-200" : "text-gray-900"
              }`}
            >
              All Ages
            </option>
            <option
              value="under18"
              className={`${
                theme === "dark" ? "text-gray-200" : "text-gray-900"
              }`}
            >
              Under 18
            </option>
            <option
              value="18to30"
              className={`${
                theme === "dark" ? "text-gray-200" : "text-gray-900"
              }`}
            >
              18 - 30
            </option>
            <option
              value="over30"
              className={`${
                theme === "dark" ? "text-gray-200" : "text-gray-900"
              }`}
            >
              Over 30
            </option>
          </select>

          {/* Add Button */}
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition w-full sm:w-auto"
          >
            Add Student
          </button>
        </div>
      </div>

      <StudentList
        students={students}
        onCardClick={handleCardClick}
        search={search}
        filterGroup={filterGroup}
        filterAge={filterAge}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        studentsPerPage={studentsPerPage}
      />

      {isModalOpen && (
        <Modal
          student={selectedStudent}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveStudent}
          onDelete={handleDeleteStudent}
        />
      )}

      {isAddModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-96">
            <h2 className="text-xl text-gray-600 font-bold mb-4">
              Add New Student
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const newStudent = {
                  name: formData.get("name"),
                  email: formData.get("email"),
                  age: formData.get("age"),
                  group: formData.get("group"),
                  avatar: formData.get("avatar"),
                };
                handleAddStudent(newStudent);
              }}
            >
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className="w-full text-gray-900 border border-gray-300 rounded-lg px-3 py-2 mb-3 focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full text-gray-900 border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
              <input
                name="age"
                placeholder="Your Age"
                className="w-full text-gray-900 border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
              <select
                name="group"
                className="w-full text-gray-900 border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
                required
              >
                <option value="">Select Group</option>
                <option value="3F1">3F1</option>
                <option value="3F2">3F2</option>
                <option value="3F3">3F3</option>
                <option value="3F4">3F4</option>
              </select>

              <input
                name="avatar"
                type="url"
                placeholder="Avatar image URL (optional)"
                className="w-full text-gray-900 border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="border text-gray-900 border-gray-400 px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
