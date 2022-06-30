export default function Interests() {
  return (
    <section>
      <h1>Interests & Preferences</h1>
      <hr />
      {["Yoga", "Swimming", "Meditation", "Musical Melodies", "Technology"].map(
        (item) => (
          <p key={item}>{item}</p>
        )
      )}
    </section>
  );
}
