import axios from "axios";
import Platform from "../../Schema/PlatformSchema.js";

const key = "31fee1b1831a4937a5d01fa95657cff4";
const api = "https://api.rawg.io/api/platforms?category=&key=";

const API_URL = api + key;

export const fetchAndSavePlatforms = async () => {
  let nextLink = API_URL;
  try {
    while (nextLink !== null) {
      const response = await axios.get(nextLink);
      const platformsData = response.data.results;

      for (const platformData of platformsData) {
        const { name } = platformData;

        // Check if the platform already exists in the database
        const existingPlatform = await Platform.findOne({ name });

        if (!existingPlatform) {
          // Platform doesn't exist, so create
          let result = await Platform.create({ name });
          if (result) {
            console.log(`Saved platform: ${name}`);
          } else {
            console.log("Error adding data");
          }
        } else {
          console.log(`Platform already exists: ${name}`);
        }
      }

      // Update nextLink with the next page link from the response
      nextLink = response.data.next;
    }

    console.log("All platforms have been checked and saved to the database.");
  } catch (error) {
    console.error("Error fetching and saving platforms:", error.message);
  }
};
