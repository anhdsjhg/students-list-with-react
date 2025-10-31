import { useState } from "react";
import { StudentForm } from "./StudentForm";

export function Modal({ student, onClose, onSave, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [avatar, setAvatar] = useState(student?.avatar || "");

  if (!student) return null;

  const handleDelete = () => {
    const confirmed = confirm(`Удалить студента ${student.name}?`);
    if (confirmed) {
      onDelete(student.id);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-2xl w-[400px] relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-2xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
          {isEditing ? "Edit Student" : "Student Details"}
        </h2>

        {isEditing ? (
          <StudentForm
            student={student}
            onSave={(updated) => {
              onSave(updated);
              setIsEditing(false);
            }}
          />
        ) : (
          <div className="flex flex-col items-center text-center gap-3">
            <img
              src={student.avatar || "https://via.placeholder.com/100"}
              alt={student.name}
              className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
            />
            <p className="text-xl text-gray-600 font-bold">{student.name}</p>
            <div>
              <p className="text-gray-600 text-xl">
                <b>Email:</b> {student.email}
              </p>
              <p className="text-gray-600 text-xl">
                <b>Age:</b> {student.age}
              </p>
              <p className="text-gray-600 text-xl">
                <b>Group:</b> {student.group}
              </p>
            </div>
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Изменить
              </button>

              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Удалить
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
