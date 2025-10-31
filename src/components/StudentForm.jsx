import { useState, useEffect } from "react";

export function StudentForm({ student, onSave }) {
  const [name, setName] = useState(student?.name || "");
  const [age, setAge] = useState(student?.age || "");
  const [email, setEmail] = useState(student?.email || "");
  const [group, setGroup] = useState(student?.group || "");
  const [avatar, setAvatar] = useState(student?.avatar || "");

  useEffect(() => {
    if (student) {
      setName(student.name);
      setAge(student.age);
      setEmail(student.email);
      setGroup(student.group);
      setAvatar(student.avatar);
    }
  }, [student]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...student,
      name,
      age,
      email,
      group,
      avatar,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border text-gray-900  border-gray-300 rounded-lg px-3 py-2 mb-3 focus:ring-2 focus:ring-blue-400 outline-none"
        required
      />
      <input
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="w-full border text-gray-900  border-gray-300 rounded-lg px-3 py-2 mb-3 focus:ring-2 focus:ring-blue-400 outline-none"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border text-gray-900  border-gray-300 rounded-lg px-3 py-2 mb-3 focus:ring-2 focus:ring-blue-400 outline-none"
        required
      />
      <input
        placeholder="Group"
        value={group}
        onChange={(e) => setGroup(e.target.value)}
        className="w-full border text-gray-900  border-gray-300 rounded-lg px-3 py-2 mb-3 focus:ring-2 focus:ring-blue-400 outline-none"
        required
      />
      <input
        type="url"
        placeholder="Avatar image URL"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
        className="w-full text-gray-900 border border-gray-300 rounded-lg px-3 py-2 mb-3 focus:ring-2 focus:ring-blue-400 outline-none"
      />

      {avatar && (
        <img
          src={avatar}
          alt="Avatar Preview"
          className="w-20 h-20 text-gray-900 rounded-full border border-gray-300 object-cover self-center"
        />
      )}

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Save
      </button>
    </form>
  );
}
