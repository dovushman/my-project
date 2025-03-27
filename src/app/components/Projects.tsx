export default function Projects() {
    return (
      <section>
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card">
            <h3 className="text-xl font-bold">Project One</h3>
            <p className="mt-2">A cool project.</p>
            <a href="#" className="text-teal-500 mt-4 inline-block">
              View Project
            </a>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold">Project Two</h3>
            <p className="mt-2">Another cool project.</p>
            <a href="#" className="text-teal-500 mt-4 inline-block">
              View Project
            </a>
          </div>
        </div>
      </section>
    );
  }