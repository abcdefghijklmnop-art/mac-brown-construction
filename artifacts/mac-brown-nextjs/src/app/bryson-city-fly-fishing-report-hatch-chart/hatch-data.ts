export type Hatch = {
  insect: string;
  size: string;
  months: string;
};

export const hatches: Hatch[] = [
  { insect: "Black Stone", size: "14–16", months: "February–March" },
  { insect: "Blue Quill", size: "18", months: "February–March" },
  { insect: "Olive Midge", size: "18–24", months: "February–March" },
  { insect: "Male Adams", size: "14–16", months: "February–March" },
  { insect: "Blue Winged Olive (Ephemerella cornuta)", size: "12–14", months: "February–July" },
  { insect: "Quill Gordon", size: "12–14", months: "February–April" },
  { insect: "Hendrickson (Ephemerella rotunda)", size: "14–16", months: "March–May" },
  { insect: "Red Quill", size: "14–16", months: "March–May" },
  { insect: "Female Adams", size: "14–16", months: "March–May" },
  { insect: "Dark Elk Hair Caddis", size: "16–18", months: "April–May" },
  { insect: "Green Drake (Ephemera guttulata)", size: "10–12", months: "April–June" },
  { insect: "Yellow Sally", size: "14–16", months: "May–August" },
  { insect: "Light Cahill", size: "14–16", months: "May–August" },
  { insect: "Sulphur (Ephemerella dorothea)", size: "16–18", months: "May–September" },
  { insect: "March Brown", size: "12–14", months: "April–May" },
  { insect: "Cinnamon Caddis", size: "14–16", months: "May–September" },
  { insect: "Isonychia", size: "12–14", months: "May–October" },
  { insect: "Blue Winged Olive (Ephemerella cornutella)", size: "18–22", months: "June–August" },
  { insect: "Inchworm", size: "10–12", months: "May–August" },
  { insect: "Beetle (Black)", size: "12–16", months: "June–September" },
  { insect: "Ant (Black & Cinnamon)", size: "16–20", months: "June–September" },
  { insect: "Flying Ant", size: "16–18", months: "July–September" },
  { insect: "Hopper (Small)", size: "10–14", months: "July–September" },
  { insect: "Trico", size: "20–24", months: "July–September" },
  { insect: "Crane Fly", size: "8–12", months: "June–August" },
  { insect: "Fall Baetis", size: "18–22", months: "September–November" },
  { insect: "Midge (General)", size: "20–24", months: "Year-Round" },
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function getActiveHatches(month: number): Hatch[] {
  return hatches.filter((h) => {
    if (h.months === "Year-Round") return true;
    const parts = h.months.split("–");
    if (parts.length !== 2) return false;
    const start = MONTH_NAMES.indexOf(parts[0].trim()) + 1;
    const end = MONTH_NAMES.indexOf(parts[1].trim()) + 1;
    if (start === 0 || end === 0) return false;
    if (start <= end) return month >= start && month <= end;
    return month >= start || month <= end;
  });
}
