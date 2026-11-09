import { hentJulegaver, leggTilJulegave, slettJulegave } from "./actions";

export default async function HomePage() {
  const julegaver = await hentJulegaver();
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
      <hr />
      <section className="julegaver">
        {
          julegaver.length === 0 ? (
            <p>Nissen har ikke vært her</p>
          ) :
            (
              julegaver.map(julegave => (
                <article key={julegave.id}>
                  <form>
                    <label>
                      <span>Julegave</span>
                      <input
                        type="text"
                        name="navn"
                        defaultValue={julegave.navn}
                        required
                      />
                    </label>
                    <label>
                      <span>Hvem er gaven til</span>
                      <input
                        type="text"
                        name="mottaker"
                        defaultValue={julegave.mottaker}
                        required
                      />
                    </label>
                    <button type="submit">Oppdater julegave</button>


                  </form>
                  <form action={slettJulegave.bind(null, julegave.id)}>
                    <button type="submit">SLETT DENNE GAVEN</button>
                  </form>
                </article>
              )))
        }
      </section>
    </main>
  )
}
