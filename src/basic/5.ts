enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  if (day === DayOfWeek.Saturday || day === DayOfWeek.Monday) {
    return true;
  }
  return false;
};