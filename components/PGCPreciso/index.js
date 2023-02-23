import ResultadoBarra from '../ResultadoBarra';

export default function PGCPreciso({ bfp, mm, mg }) {
  return (
    <div className="quadro">
      <h2 className="mt-3">Método preciso</h2>
      <p>
        PGC: <span className="highlight">{bfp.toFixed(1)} %</span>
      </p>
      <p>
        Massa magra: <span className="highlight">{mm.toFixed(1)} kg</span>
      </p>
      <p>
        Massa gorda: <span className="highlight">{mg.toFixed(1)} kg</span>
      </p>
      <ResultadoBarra porcentagem={bfp} />
    </div>
  );
}
