export function StudentCard({ student, onCardClick }) {
  return (
    <div
      className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-3xl hover:scale-102 duration-200 transition w-full cursor-pointer"
      onClick={() => onCardClick(student)}
    >
      <div className="flex justify-between items-center mb-2">
        <img src={student.avatar} className="w-15 h-15 object-cover rounded-full" />
        <div className="flex flex-col items-end">
          <h2 className="text-2xl text-gray-400 font-semibold">{student.name}</h2>
          <h2 className="text-gray-400 text-md">
            <b>ID:</b> {student.id}
          </h2>
        </div>
      </div>
      <h2 className="text-gray-500 text-lg">
        <b>Email:</b> {student.email}
      </h2>
      <h2 className="text-gray-500 text-lg">
        <b>Age:</b> {student.age}
      </h2>
      <h2 className="text-gray-500 text-lg">
        <b>Group:</b> {student.group}
      </h2>
    </div>
  );
}
