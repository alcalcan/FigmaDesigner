import { CleaningService } from "./CleaningService";

const cleaner = new CleaningService();
const result = cleaner.cleanup("sidebar", "UEFA_Academy_online/sidebar/sidebar");
console.log("Cleanup result:", result);
