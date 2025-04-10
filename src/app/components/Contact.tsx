import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission on Enter key
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
  
        // Clear the message after 5 seconds
        setTimeout(() => {
          setStatus("");
        }, 5000);
      } else {
        const errorData = await response.json(); // Parse the error response
        setStatus(errorData.error || "Failed to send message. Please try again.");
      }
    } catch {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section className="p-8 max-w-2xl mx-auto bg-[var(--section-background)] rounded-lg focus:outline-none focus:ring-0 border-none">
      <h2 className="text-3xl font-bold mb-6 text-[var(--heading-color)]">Get in Touch</h2>
      <p className="mb-4 text-[var(--text-color)]">
        Feel free to reach out for collaborations or just to chat.
      </p>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          onKeyDown={handleKeyDown} // Prevent Enter key submission
          className="p-3 rounded bg-[var(--card-background)] text-[var(--text-color)] focus:outline-none focus:ring-0 border-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          onKeyDown={handleKeyDown} // Prevent Enter key submission
          className="p-3 rounded bg-[var(--card-background)] text-[var(--text-color)] focus:outline-none focus:ring-0 border-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="p-3 rounded bg-[var(--card-background)] text-[var(--text-color)] focus:outline-none focus:ring-0 border-none"
          rows={5}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-[var(--button-background)] text-[var(--button-text-color)] rounded focus:outline-none focus:ring-0 border-none transition-all"
        >
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-[var(--status-color)]">{status}</p>}
    </section>
  );
}