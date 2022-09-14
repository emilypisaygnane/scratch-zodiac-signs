import './ZodiacCard.css';

export default function ZodiacCard({ name, dates }) {
  return (
    <div className="zodiac-card">
      <img alt={name} src={`${process.env.PUBLIC_URL}/Zodiac/${name}.png`} />
      <span className="name">{name}</span>
      <span className="dates">{dates}</span>
    </div>
  );
}