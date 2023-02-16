export default function replaceDot(value) {
  return value.includes(',') ? value.replace(',', '.') : value;
}
