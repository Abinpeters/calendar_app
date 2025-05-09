// src/components/AddItem.jsx
import React, { useState } from "react";
import Modal from "react-modal";
import "./AddItem.css";

Modal.setAppElement("#root");

export default function AddItem({ onAdd }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    duration: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ title: "", date: "", time: "", duration: "" });
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="nav-button1"
        style={{ marginBottom: "1rem" }}
      >
        ➕ Add Event
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Add Event"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h3>Add New Event</h3>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Event Title"
            required
          />
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            required
          />
          <input
            name="time"
            type="time"
            value={form.time}
            onChange={handleChange}
            required
          />
          <input
            name="duration"
            value={form.duration}
            onChange={handleChange}
            placeholder="Duration (e.g., 1h)"
            required
          />
          <div
            style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}
          >
            <button type="submit" className="nav-button">
              Add
            </button>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="nav-button"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
