import axios from "axios";
import Game from "../../Schema/GameSchema.js";
import Platform from "../../Schema/PlatformSchema.js";
import Publisher from "../../Schema/PublisherSchema.js";
import Genre from "../../Schema/GenreSchema.js";
import Store from "../../Schema/StoreSchema.js";

const key = "?key=31fee1b1831a4937a5d01fa95657cff4";
const api = "https://api.rawg.io/api/games/";

export const fetchAndSaveGame = async ({ id }) => {
  try {
    const response = await axios.get(api + id + key);
    const {
      name,
      description_raw,
      rating,
      genres,
      stores,
      released,
      background_image,
      platforms,
      publishers,
    } = response.data;

    const platformIds = await Promise.all(
      platforms.map(async (platformData) => {
        // Find or create platform documents and get their ObjectIds
        const platformName = platformData.platform.name;
        let platform = await Platform.findOne({ name: platformName });

        if (!platform) {
          platform = await Platform.create({ name: platformName });
        }

        return platform._id;
      })
    );

    const genreIds = await Promise.all(
      genres.map(async (genreData) => {
        // Find or create genre documents and get their ObjectIds
        const genreName = genreData.name;
        let genre = await Genre.findOne({ name: genreName });

        if (!genre) {
          genre = await Genre.create({ name: genreName });
        }

        return genre._id;
      })
    );

    const publisherIds = await Promise.all(
      publishers.map(async (publisherData) => {
        // Find or create publisher documents and get their ObjectIds
        const publisherName = publisherData.name;
        let publisher = await Publisher.findOne({ name: publisherName });

        if (!publisher) {
          publisher = await Publisher.create({ name: publisherName });
        }

        return publisher._id;
      })
    );
    const storeIds = await Promise.all(
      stores.map(async (storeData) => {
        // Find or create store documents and get their ObjectIds
        const storeName = storeData.store.name;
        let store = await Store.findOne({ name: storeName });

        if (!store) {
          store = await Store.create({ name: storeName });
        }

        return store._id;
      })
    );

    const existingGame = await Game.findOne({ name });
    if (!existingGame) {
      let result = await Game.create({
        name,
        description: description_raw,
        rating,
        platforms: platformIds,
        publishers: publisherIds,
        genres: genreIds,
        stores: storeIds,
        released_date: released,
        image: background_image,
      });
      if (result) {
        console.log(`Saved Game: ${name}`);
      } else {
        console.log("Error adding data");
      }
    } else {
      console.log(`Game already exists: ${name}`);
    }
  } catch (error) {
    console.error("Error fetching and saving Game:", error.message);
  }
};

export const getGames = async () => {
  try {
    let games = await Game.find();
    return games;
  } catch (error) {
    console.error("Error getting Games:", error.message);
  }
};
