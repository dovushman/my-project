export default function Contact() {
    return (
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-4">
          Feel free to reach out for collaborations or just to chat.
        </p>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 rounded bg-[var(--card-background)] text-[var(--text-color)]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 rounded bg-[var(--card-background)] text-[var(--text-color)]"
          />
          <textarea
            placeholder="Your Message"
            className="p-2 rounded bg-[var(--card-background)] text-[var(--text-color)]"
            rows={4}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-[var(--button-background)] text-[var(--button-text-color)] rounded"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  }