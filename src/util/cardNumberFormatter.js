export function cardNumberFormatter(value) {
  console.log(value);
  const v = value.replace(/\s+/g, "").substr(0, 16);
  console.log(v);
  const parts = [];

  for (let i = 0; i < v.length; i += 4) {
    parts.push(v.substr(i, 4));
  }

  console.log(parts);

  return parts.length > 1 ? parts.join(" ") : value;
}
