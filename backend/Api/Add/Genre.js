import axios from "axios";
import Genre from "../../Schema/GenreSchema.js";

const key = "31fee1b1831a4937a5d01fa95657cff4";
const api = "https://api.rawg.io/api/genres?key=";

const API_URL = api + key;

export const fetchAndSaveGenres = async () => {
  let nextLink = API_URL;
  try {
    while (nextLink!=null) {
      const response = await axios.get(nextLink);
      const genresData = response.data.results;

      for (const genreData of genresData) {
        const { name } = genreData;

        // Check if the Genre already exists in the database
        const existingGenre = await Genre.findOne({ name });

        if (!existingGenre) {
          // Genre doesn't exist, so create
          let result = await Genre.create({ name });
          if (result) {
            console.log(`Saved Genre: ${name}`);
          } else {
            console.log("Error adding data");
          }
        } else {
          console.log(`Genre already exists: ${name}`);
        }
      }
      nextLink = response.data.next;
    }

    console.log("All genres have been checked and saved to the database.");
  } catch (error) {
    console.error("Error fetching and saving genres:", error.message);
  }
};
