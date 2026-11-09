import { leggTilJulegave } from "./actions";

export default async function HomePage() {
  return (
    <main>
      <h1>Julegaver 2026</h1>
      <form className="julegave-skjema" action={leggTilJulegave}>
        <label>
          <span>Hva er gaven</span>
          <input type="text" name="navn" required />
        </label>
        <label>
          <span>Hvem er gaven til</span>
          <input type="text" name="mottaker" required />
        </label>
        <button type="submit">Legg til julegave</button>
      </form>
    </main>
  )
}
