import { developers } from "./data/developerData/developers";

export function developerList(developer) {
  return developer ? [developer] : developers;
}
