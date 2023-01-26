import fs from "fs";

const route = "./db/data.json";
export const saveTask = (data) => {
  fs.writeFileSync(route, JSON.stringify(data, null, 2));
};
export const readDB = () => {
  if (!fs.existsSync(route)) return null;
  const data = JSON.parse(fs.readFileSync(route, "utf-8"));
  return data;
};
