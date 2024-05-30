import { parseISO, format } from "date-fns";

export const formattedDate = (timestamp) => {
  const date = parseISO(timestamp);
  const formattedDate = format(date, "dd/MM/yyyy");
  const formattedDay = format(date, "EEEE");

  return { formattedDate, formattedDay };
};

export const formattedTime = (timestamp) => {
  const date = parseISO(timestamp);
  return format(date, "h:mma");
};

export const mapSteps = {
  TICKET_CREATED: { color: "#FFC107", step: 0 },
  PACKAGE_RECEIVED: { color: "#FFC107", step: 1 },
  AVAILABLE_FOR_PICKUP: { color: "#FFC107", step: 2 },
  OUT_FOR_DELIVERY: { color: "#FFC107", step: 2 },
  CANCELLED: { color: "red", step: 2 },
  DELIVERED: { color: "#4CAF50", step: 4 },
  DELIVERED_TO_SENDER: { color: "#4CAF50", step: 4 },
};
