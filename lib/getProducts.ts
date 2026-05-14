import Papa from "papaparse";

export async function getProducts() {
  const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTmLKmhfhs6qqmTpW_yjdRyqG37v_AVXF44_qT20nDJrdHn21ll-C2K6rkuGxsDwnfK5mbOqmmqP6Qc/pub?output=csv";

  const res = await fetch(CSV_URL, {
    // ⬇️ 开启 ISR: 每 60 秒重新验证数据
    next: { revalidate: 300 }
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch CSV: ${res.status} ${res.statusText}`);
  }

  const csvText = await res.text();
  const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });

  if (parsed.errors.length) {
    console.error("CSV parsing errors:", parsed.errors);
  }

  return parsed.data;
}