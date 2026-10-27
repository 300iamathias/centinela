"use client";

import { useSyncExternalStore } from "react";

/**
 * Reloj en vivo de la central de monitoreo (hora de Ecuador, zona Guayaquil).
 * Patrón useSyncExternalStore: en el servidor renderiza «--:--:--» (sin
 * desajustes de hidratación) y en el navegador actualiza cada segundo.
 */
const formatter = new Intl.DateTimeFormat("es-EC", {
  timeZone: "America/Guayaquil",
  hourCycle: "h23",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

const SERVER_SNAPSHOT = "--:--:--";

function subscribe(onStoreChange: () => void) {
  const id = setInterval(onStoreChange, 1000);
  return () => clearInterval(id);
}

function getSnapshot() {
  return formatter.format(new Date());
}

function getServerSnapshot() {
  return SERVER_SNAPSHOT;
}

export function LiveClock() {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <time
      dateTime={time === SERVER_SNAPSHOT ? undefined : time}
      className="tabular-nums font-bold text-signal-400"
      aria-label="Hora local actual de la central de monitoreo"
    >
      {time}
    </time>
  );
}
