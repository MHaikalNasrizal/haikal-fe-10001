export async function GET() {
  let res ={
    moviesData:[
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
        },
        {
          "Movie_ID": 7,
          "Title": "Interstellar",
          "Duration": "2 hours 49 minutes",
          "Views": "38.9k",
          "Genre": "sci-fi",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjIxNTU4MzYyNl5BMl5BanBnXkFtZTgwNzUxNzE3MTE@._V1_FMjpg_UX1000_.jpg",
          "Overall_rating": 8.6,
          "Theater_name": "galaxy theaters",
          "Start_time": "2020-10-05T15:00:00",
          "End_time": "2020-10-05T17:49:00",
          "Description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
          "Theater_room_no": 7
        },
        {
          "Movie_ID": 8,
          "Title": "The Shawshank Redemption",
          "Duration": "2 hours 22 minutes",
          "Views": "47.6k",
          "Genre": "drama",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZTA3LWFmNDEtODM1ZmYwY2E2YzNkXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_FMjpg_UX1000_.jpg",
          "Overall_rating": 9.3,
          "Theater_name": "classic movies",
          "Start_time": "2020-11-15T13:00:00",
          "End_time": "2020-11-15T15:22:00",
          "Description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
          "Theater_room_no": 8
        },
        {
          "Movie_ID": 9,
          "Title": "Pulp Fiction",
          "Duration": "2 hours 34 minutes",
          "Views": "32.1k",
          "Genre": "crime",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTg4NDU0NjYyNF5BMl5BanBnXkFtZTgwMDU2Njk5NDE@._V1_FMjpg_UX1000_.jpg",
          "Overall_rating": 8.9,
          "Theater_name": "retro cinema",
          "Start_time": "2020-12-01T19:00:00",
          "End_time": "2020-12-01T21:34:00",
          "Description": "The lives of two mob hitmen, a boxer, a gangster, and his wife intertwine in four tales of violence and redemption.",
          "Theater_room_no": 9
        },
        {
          "Movie_ID": 10,
          "Title": "Forrest Gump",
          "Duration": "2 hours 22 minutes",
          "Views": "41.8k",
          "Genre": "drama",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTkzNTM2NjAzMF5BMl5BanBnXkFtZTgwMDU2Mjg5NDE@._V1_FMjpg_UX1000_.jpg",
          "Overall_rating": 8.8,
          "Theater_name": "cinema palace",
          "Start_time": "2021-01-15T17:00:00",
          "End_time": "2021-01-15T19:22:00",
          "Description": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
          "Theater_room_no": 10
        },
        {
          "Movie_ID": 11,
          "Title": "Forrest Gump",
          "Duration": "2 hours 22 minutes",
          "Views": "50.3k",
          "Genre": "drama",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNWIwODJlMTctYWNkNi00NDZhLTkwNTYtNDIwNjhiMDdlODFmXkEyXkFqcGdeQXVyNDY5MjMyNTg@._V1_FMjpg_UX1000_.jpg",
          "Overall_rating": 8.8,
          "Theater_name": "retro cinema",
          "Start_time": "2021-02-20T11:00:00",
          "End_time": "2021-02-20T13:22:00",
          "Description": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
          "Theater_room_no": 11
        },
        {
          "Movie_ID": 12,
          "Title": "The Lion King",
          "Duration": "1 hour 58 minutes",
          "Views": "44.8k",
          "Genre": "animation",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTg1MjUwNTg0OV5BMl5BanBnXkFtZTgwNzg4NjY1NDE@._V1_FMjpg_UX1000_.jpg",
          "Overall_rating": 8.5,
          "Theater_name": "family theater",
          "Start_time": "2021-03-10T10:00:00",
          "End_time": "2021-03-10T11:58:00",
          "Description": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
          "Theater_room_no": 12
        },
        {
          "Movie_ID": 13,
          "Title": "Gladiator",
          "Duration": "2 hours 35 minutes",
          "Views": "37.7k",
          "Genre": "action",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNjE3YzdlNzAtMTMwOC00NzY2LTg2N2YtMjhkNzg5MzQxYTM2XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_FMjpg_UX1000_.jpg",
          "Overall_rating": 8.5,
          "Theater_name": "epic cinema",
          "Start_time": "2021-04-05T15:00:00",
          "End_time": "2021-04-05T17:35:00",
          "Description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
          "Theater_room_no": 13
        },
        {
          "Movie_ID": 14,
          "Title": "The Shawshank Redemption",
          "Duration": "2 hours 22 minutes",
          "Views": "58.2k",
          "Genre": "drama",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmRhMC00ZDIzLWFmNTEtODM1ZjM3NzE3ZmFkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_FMjpg_UX1000_.jpg",
          "Overall_rating": 9.3,
          "Theater_name": "liberty theater",
          "Start_time": "2021-05-01T18:00:00",
          "End_time": "2021-05-01T20:22:00",
          "Description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
          "Theater_room_no": 14
        },
        {
          "Movie_ID": 15,
          "Title": "Pulp Fiction",
          "Duration": "2 hours 34 minutes",
          "Views": "49.6k",
          "Genre": "crime",
          "Poster": "https://m.media-amazon.com/images/M/MV5BZGQxNzRhNzYtMWMwMi00YzVkLWFjNzEtYjFkMWJkMjQxNzRkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
          "Overall_rating": 8.9,
          "Theater_name": "cinephile's choice",
          "Start_time": "2021-06-10T20:00:00",
          "End_time": "2021-06-10T22:34:00",
          "Description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
          "Theater_room_no": 15
        },
        {
          "Movie_ID": 16,
          "Title": "Fight Club",
          "Duration": "2 hours 19 minutes",
          "Views": "53.4k",
          "Genre": "drama",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMmEzYWI2YzQtYmFjOS00ZDRhLTgwYjctYWMxZmM1YzRiYjZkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
          "Overall_rating": 8.8,
          "Theater_name": "underground cinema",
          "Start_time": "2021-07-20T21:00:00",
          "End_time": "2021-07-20T23:19:00",
          "Description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
          "Theater_room_no": 16
        },
        {
          "Movie_ID": 17,
          "Title": "Back to the Future",
          "Duration": "1 hour 56 minutes",
          "Views": "47.9k",
          "Genre": "sci-fi",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjIxNTU4MzY5MF5BMl5BanBnXkFtZTcwMjgwOTMzMw@@._V1_FMjpg_UX1000_.jpg",
          "Overall_rating": 8.5,
          "Theater_name": "nostalgia theater",
          "Start_time": "2021-08-15T16:00:00",
          "End_time": "2021-08-15T17:56:00",
          "Description": "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, eccentric scientist Doc Brown.",
          "Theater_room_no": 17
        },
        {
          "Movie_ID": 18,
          "Title": "Schindler's List",
          "Duration": "3 hours 15 minutes",
          "Views": "39.2k",
          "Genre": "biography",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMWExMzQ2ZjgtM2FlZi00NjUxLTg4NDctNDdhNjEyM2Y2NjlkXkEyXkFqcGdeQXVyNDY1MDA3ODM@._V1_FMjpg_UX1000_.jpg",
          "Overall_rating": 8.9,
          "Theater_name": "historical theater",
          "Start_time": "2021-09-10T14:00:00",
          "End_time": "2021-09-10T17:15:00",
          "Description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
          "Theater_room_no": 18
        },
        {
          "Movie_ID": 19,
          "Title": "The Lord of the Rings: The Return of the King",
          "Duration": "3 hours 21 minutes",
          "Views": "68.1k",
          "Genre": "fantasy",
          "Poster": "https://m.media-amazon.com/images/M/MV5BZjkxZTA4MjgtMzk5ZS00N2U4LWI0NzUtYTQyZmUyYmYxZjA1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
          "Overall_rating": 8.9,
          "Theater_name": "fantasy realm cinema",
          "Start_time": "2021-10-05T15:00:00",
          "End_time": "2021-10-05T18:21:00",
          "Description": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
          "Theater_room_no": 19
        },
        {
          "Movie_ID": 20,
          "Title": "Star Wars: Episode IV - A New Hope",
          "Duration": "2 hours 1 minute",
          "Views": "54.3k",
          "Genre": "sci-fi",
          "Poster": "https://m.media-amazon.com/images/M/MV5BYmMyM2RjNmUtYjBiZC00ZDkwLWI0NDAtZWFjNzA4ZTQzYzQ2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
          "Overall_rating": 8.6,
          "Theater_name": "galaxy theater",
          "Start_time": "2021-11-25T18:00:00",
          "End_time": "2021-11-25T20:01:00",
          "Description": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
          "Theater_room_no": 20
        }
    ]
  }
  return Response.json(res)
  
}

export function PUSH(){

}