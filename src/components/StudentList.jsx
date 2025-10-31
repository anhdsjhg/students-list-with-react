import { StudentCard } from "./StudentCard";

export function StudentList({
  students,
  onCardClick,
  search,
  filterGroup,
  filterAge,
  currentPage,
  studentsPerPage,
  setCurrentPage,
}) {
  const term = (search || "").toLowerCase();

  const filteredStudents = students
    .filter((s) => {
      const term = search.toLowerCase();
      return (
        (s.name && s.name.toLowerCase().includes(term)) ||
        (s.group && s.group.toLowerCase().includes(term)) ||
        (s.age && s.age.toString().includes(term))
      );
    })
    .filter((s) => (filterGroup === "all" ? true : s.group === filterGroup))
    .filter((s) => {
      if (filterAge === "under18") return s.age < 18;
      if (filterAge === "18to30") return s.age >= 18 && s.age <= 30;
      if (filterAge === "over30") return s.age > 30;
      return true;
    });

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center py-10 px-20">
      {currentStudents.length > 0 ? (
        currentStudents.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onCardClick={onCardClick}
          />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          {students.length === 0 ? "Loading students..." : "No students found"}
        </p>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6 col-span-full ">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-3 py-1 bg-gray-300 text-gray-600 font-semibold disabled:text-gray-300 rounded disabled:bg-gray-500"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-3 py-1 bg-gray-300 text-gray-600 font-semibold disabled:text-gray-300 rounded disabled:bg-gray-500"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
