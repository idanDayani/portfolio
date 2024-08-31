import dayjs from "dayjs";

export function getTotalExperience(startDate : string){
    const total = dayjs().diff(startDate, "year", true);
    const years = Math.floor(total);
    const months = Math.round((total - years) * 10);
    const totalExperience = `${years} yrs ${months} mos`;
    return totalExperience;
}