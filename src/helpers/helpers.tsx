/**
 * Provides a nicer interface for retrieving the current date.
 * @argument timeZone:
 */
export function getDate(timeZone: string) {
  // undefined here uses the default time format taken from the environment.
  const date = new Intl.DateTimeFormat(undefined, {
    month: "long",
    weekday: "long",
    day: "numeric",
    year: "numeric",
    timeZone: timeZone,
  }).formatToParts(new Date());

  let day, weekday, month, year;

  for (const part of date) {
    if (part.type === "day") day = part.value;
    if (part.type === "weekday") weekday = part.value;
    if (part.type === "month") month = part.value;
    if (part.type === "year") year = part.value;
  }

  if (!day || !weekday || !month || !year) {
    throw new Error("Could not find date part.");
  }

  return { day, weekday, month, year };
}

export function roundIfDefined(num: number | undefined) {
  if (num !== undefined) {
    return Math.round(num);
  } else {
    return num;
  }
}

/**
 * A simple range function.
 * @returns Array containing numbers 0 <-> length.
 */
export function range(length: number) {
  return Array.from({ length }, (_, i) => i);
}
