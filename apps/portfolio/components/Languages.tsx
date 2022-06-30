export default function Languages() {
  return (
    <section>
      <h1>Language & communication</h1>
      <hr />
      {[
        ["English", "Professional"],
        ["Hindi", "Professional"],
        ["Gujarati", "Native"],
      ].map((item) => (
        <p key={item[0]}>
          <b>{item[0]}</b> ({item[1]})
        </p>
      ))}
    </section>
  );
}
