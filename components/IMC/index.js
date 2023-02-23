export default function IMC({ imc, bfpimc, mmimc, mgimc }) {
  return (
    <>
      <h2 className="mt-3">Método IMC</h2>
      <p>IMC: {imc.toFixed(1)}</p>
      <p>PGC: {bfpimc.toFixed(1)}%</p>
      <p>Massa magra: {mmimc.toFixed(1)}kg</p>
      <p>Massa gorda: {mgimc.toFixed(1)}kg</p>
    </>
  );
}
