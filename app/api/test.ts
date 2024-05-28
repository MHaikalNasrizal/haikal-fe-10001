export default function handler(req, res) {
    const { Theater_name } = req.query;
  
    // Mock data - replace with actual API logic
    const mockMovies = [
        {"Movie_ID": 1,
        "Title": "The Irishman",
        "Duration": "1 hour 20 minutes",
        "Views": "21.1k",
        "Genre": "comedy",
        "Poster":
          "https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_FMjpg_UX1000_.jpg",
        "Overall_rating": 7.9,
        "Theater_name": "abc movies",
        "Start_time": "2020-04-04T09:00:00",
        "End_time": "2020-04-04T12:00:00",
        "Description":
          "An aging hitman recalls his time with the mob and the intersecting events with his friend, Jimmy Hoffa, through the 1950-70s.",
        "Theater_room_no": 1,},
        {
          "Movie_ID": 2,
          "Title": "Parasite",
          "Duration": "2 hours 12 minutes",
          "Views": "34.5k",
          "Genre": "thriller",
          "Poster": "https://m.media-amazon.com/images/M/MV5BYmFjNDBjZTItYWFjNS00ZDc0LWFhMTEtNjQwYzY0MmE5MzE5XkEyXkFqcGdeQXVyODk3NTMyOTg@._V1_FMjpg_UX1000_.jpg",
          "Overall_rating": 8.6,
          "Theater_name": "grand cinema",
          "Start_time": "2020-05-10T14:00:00",
          "End_time": "2020-05-10T16:12:00",
          "Description": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
          "Theater_room_no": 2
        },
        {
          "Movie_ID": 3,
          "Title": "Inception",
          "Duration": "2 hours 28 minutes",
          "Views": "45.8k",
          "Genre": "sci-fi",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTc1MTg2NzYyN15BMl5BanBnXkFtZTcwODI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
          "Overall_rating": 8.8,
          "Theater_name": "cityplex",
          "Start_time": "2020-06-15T18:00:00",
          "End_time": "2020-06-15T20:28:00",
          "Description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
          "Theater_room_no": 3
        },
        {
          "Movie_ID": 4,
          "Title": "Joker",
          "Duration": "2 hours 2 minutes",
          "Views": "29.3k",
          "Genre": "drama",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjA3NzQ2MTM0NF5BMl5BanBnXkFtZTgwNzYyNzY3NzM@._V1_FMjpg_UX1000_.jpg",
          "Overall_rating": 8.5,
          "Theater_name": "regal cinemas",
          "Start_time": "2020-07-20T20:00:00",
          "End_time": "2020-07-20T22:02:00",
          "Description": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.",
          "Theater_room_no": 4
        },
        {
          "Movie_ID": 5,
          "Title": "Avengers: Endgame",
          "Duration": "3 hours 1 minute",
          "Views": "89.7k",
          "Genre": "action",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5OTk3MjMzMV5BMl5BanBnXkFtZTgwODc5MjA0NzM@._V1_FMjpg_UX1000_.jpg",
          "Overall_rating": 8.4,
          "Theater_name": "mega theater",
          "Start_time": "2020-08-30T12:00:00",
          "End_time": "2020-08-30T15:01:00",
          "Description": "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
          "Theater_room_no": 5
        },
        {
          "Movie_ID": 6,
          "Title": "The Dark Knight",
          "Duration": "2 hours 32 minutes",
          "Views": "55.2k",
          "Genre": "action",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
          "Overall_rating": 9.0,
          "Theater_name": "cinema world",
          "Start_time": "2020-09-10T18:00:00",
          "End_time": "2020-09-10T20:32:00",
          "Description": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
          "Theater_room_no": 6
        }
    ];
  
    // Filter movies based on query (mock example)
    const filteredMovies = mockMovies.filter(
      (movie) => movie.Title.includes(Theater_name)
    );
  
    res.status(200).json({ movies: filteredMovies });
  }