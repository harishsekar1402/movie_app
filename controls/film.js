import Models from "../models/movie";

const Movies = async (req, res) => {
  try {
    const getAllMovies = await Models.find();
    res.status(200).json(getAllMovies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addMovie = async (req, res) => {
  const newMovie = new Models({
    name: req.body.name,
    genre: req.body.genre,
    language: req.body.language,
    rating: req.body.rating,
  });
  try {
    const movie = await newMovie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMovieById = (req, res) => {
  res.status(200).json(res.movie);
};

const updateMovieById = async (req, res) => {
  if (req.body.name != null) {
    res.movie.name = req.body.name;
  }
  if (req.body.language != null) {
    res.movie.language = req.body.language;
  }
  if (req.body.genre != null) {
    res.movie.genre = req.body.genre;
  }

  if (req.body.rating != null) {
    res.movie.rating = req.body.rating;
  }
  try {
    const updatedMovie = await res.movie.save();
    res.status(201).json(updatedMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteMovieById = async (req, res) => {
  try {
    await res.movie.deleteOne();
    res.json({ message: `Deleted ${res.movie.name} and its details` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

async function getMovie(req, res, next) {
  let movie;
  try {
    movie = await Models.findById(req.params.id);
    if (movie == null) {
      return res
        .status(404)
        .json({ message: `Cannot find movie with id ${req.params.id}` });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.movie = movie;
  next();
}

export{
  Movies,
  addMovie,
  getMovie,
  getMovieById,
  updateMovieById,
  deleteMovieById ,
};
