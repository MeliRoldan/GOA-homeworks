import React, { useState } from 'react';

function Modal({ task, onSave, onClose }) {
  const [editedTask, setEditedTask] = useState(task.text);

  const handleChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleSave = () => {
    onSave(editedTask);
    onClose();
  };

  return (
    <div className="modal-overlay fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="modal w-11/12 max-w-lg">
        <textarea value={editedTask} onChange={handleChange} className="w-full p-3 rounded-md"/>
        <div className="flex gap-4 mt-4">
          <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded-md">Save</button>
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-md">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;