import axios from "axios";

export type BoredActivity = {
  activity: string;
  type?: string;
  participants?: number;
  price?: number;
  link?: string;
};

const urlPrimary = "https://www.boredapi.com/api/activity"; // Apipheny sample :contentReference[oaicite:1]{index=1}
const urlFallback = "https://bored-api.appbrewery.com/random"; // alt working endpoint :contentReference[oaicite:2]{index=2}

export async function getRandomActivity(): Promise<BoredActivity> {
  try {
    const res = await axios.get(urlPrimary);
    return res.data;
  } catch {
    const res2 = await axios.get(urlFallback);
    return res2.data;
  }
}
