export default function AguaDiaria({ aguaDiaria }) {
  return (
    <div className="quadro">
      <h2>Água Diária</h2>
      <p>
        litros por dia (16 horas):{' '}
        <span className="highlight">{aguaDiaria.toPrecision(3)} L/16h</span>
      </p>
      <p>
        ml por hora:{' '}
        <span className="highlight">
          {((aguaDiaria / 960) * 60).toPrecision(3).split('.')[1]} ml/h
        </span>
      </p>
    </div>
  );
}
