"use client";

import { useTheme } from "../ThemeContext";
import { experienceList } from "../experienceList";

export default function Experience() {
  const { theme } = useTheme();
  const cardStyle = {
    backgroundColor: theme === "dark" ? "#121212" : "var(--background-color)",
    border: theme === "dark" ? "1px solid #2A2A2A" : "1px solid #E5E5E5",
  };

  const pillStyle = {
    backgroundColor: theme === "dark" ? "rgba(100, 161, 255, 0.12)" : "rgba(77, 149, 216, 0.12)",
    color: "var(--accent-color)",
    border: theme === "dark" ? "1px solid rgba(100, 161, 255, 0.35)" : "1px solid rgba(77, 149, 216, 0.35)",
  };

  return (
    <section
      id="experience"
      className="py-16 px-6 md:px-8 lg:px-12 text-[var(--text-color)]"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-3 text-[var(--accent-color)]">
            Professional Experience
          </h2>
          <p className="text-lg text-[var(--secondary-text-color)]">
            Real-world work across startups and internships, with shipped features and measurable outcomes.
          </p>
        </div>

        <div className="space-y-6">
          {experienceList.map((exp) => (
            <div
              key={exp.id}
              className="relative overflow-hidden rounded-xl shadow-lg p-6"
              style={cardStyle}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-wide text-[var(--secondary-text-color)]">
                    {exp.company}
                  </p>
                  <h3 className="text-2xl font-semibold text-[var(--accent-color)]">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-[var(--secondary-text-color)]">
                    {exp.location}
                  </p>
                  {exp.url && (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--accent-color)] hover:underline"
                    >
                      {exp.url.replace(/^https?:\/\//, "")}
                    </a>
                  )}
                </div>
                <div className="text-right space-y-2">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full" style={pillStyle}>
                    {exp.type}
                  </span>
                  <p className="text-sm text-[var(--secondary-text-color)]">
                    {exp.dates}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-base text-[var(--text-color)]">
                {exp.summary}
              </p>

              <ul className="mt-4 space-y-2 list-disc pl-5">
                {exp.highlights.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>

              {exp.skills && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium rounded-full"
                      style={pillStyle}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
