 export default function Contact() {
  return (
    <section className="p-8 max-w-2xl mx-auto bg-[var(--section-background)] rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-[var(--heading-color)]">Get in Touch</h2>
      <p className="mb-4 text-[var(--text-color)]">
        Feel free to reach out for collaborations or just to chat.
      </p>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded bg-[var(--card-background)] text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-color)]"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-[var(--card-background)] text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-color)]"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 rounded bg-[var(--card-background)] text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-color)]"
          rows={5}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-[var(--button-background)] text-[var(--button-text-color)] rounded hover:bg-[var(--button-hover-background)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-color)] transition-all"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
