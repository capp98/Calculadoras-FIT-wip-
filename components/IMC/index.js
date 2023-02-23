export default function IMC({ imc, bfpimc, mmimc, mgimc }) {
  return (
    <div className="quadro">
      <h2 className="mt-3">Método IMC</h2>
      <p>
        IMC: <span className="highlight">{imc.toFixed(1)}</span>
      </p>
      <p>
        PGC: <span className="highlight">{bfpimc.toFixed(1)} %</span>
      </p>
      <p>
        Massa magra: <span className="highlight">{mmimc.toFixed(1)} kg</span>
      </p>
      <p>
        Massa gorda: <span className="highlight">{mgimc.toFixed(1)} kg</span>
      </p>
    </div>
  );
}
