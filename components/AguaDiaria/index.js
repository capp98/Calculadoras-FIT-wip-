export default function AguaDiaria({ aguaDiaria }) {
  return (
    <>
      <h2>Água Diária</h2>
      <p>litros por dia (16 horas): {aguaDiaria.toPrecision(3)} L/16h</p>
      <p>
        ml por hora: {((aguaDiaria / 960) * 60).toPrecision(3).split('.')[1]}{' '}
        ml/h
      </p>
    </>
  );
}
