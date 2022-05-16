export default function IDRConverter(props = 0) {
  const idr = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(parseInt(props));
  return idr;
}
