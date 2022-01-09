export default function Section({ title, children }) {
  return (
    <section>
      <h2 className="Feedback__title">{title}</h2>
      {children}
    </section>
  );
}
