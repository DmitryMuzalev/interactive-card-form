function numberFormatter(value) {
  const v = value.replace(/\s+/g, "").substr(0, 16);
  const parts = [];
  for (let i = 0; i < v.length; i += 4) {
    parts.push(v.substr(i, 4));
  }
  return parts.length > 1 ? parts.join(" ") : value;
}

function nameFormatter(value) {
  return value.replace(/[^A-Za-z\s]*$/gi, "").substr(0, 21);
}

function CVCFormatter(value) {
  return value.replace(/[^0-9]/gi, "").substr(0, 4);
}

export { numberFormatter, nameFormatter, CVCFormatter };
