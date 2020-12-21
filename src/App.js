import React, { useState } from "react";
import "./styles.css";

const action = [
  {
    Name: "Misson Impossible",
    img:
      "https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg",
    story:
      "Mission: Impossible is a series of American action spy films both based on and a follow-on from the television series of the same name created by Bruce Geller. The series is mainly produced by and stars Tom Cruise, whose character is Ethan Hunt, an agent of the Impossible Missions Force (IMF)."
  },
  {
    Name: "Knight and Day",
    img:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRB2OncUdgBRmucPPLNV-wRjaQF7-Sqv9QxxXeaIbZ8UlZjyakX",
    story:
      "night and Day is a 2010 American action comedy film directed by James Mangold and starring Tom Cruise and Cameron Diaz. The film was the second on-screen collaboration of Cruise and Diaz, following the 2001 film Vanilla Sky.[3] Diaz plays June Havens, a classic car restorer who unwittingly gets caught up with the eccentric secret agent Roy Miller, played by Cruise, who is on the run from the CIA."
  },
  {
    Name: "Shooter",
    img:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSxaNPvzYQpGDNlTlyjxO6m-BJ9NleI34fBvYb0KuVNCKptklle",
    story:
      "Shooter is a 2007 American action thriller film directed by Antoine Fuqua[4] and written by Jonathan Lemkin, based on the 1993 novel Point of Impact by Stephen Hunter.[5] The film follows Force Recon veteran Bob Lee Swagger (Mark Wahlberg), who is framed for murder by a rogue unit of personnel operating for a private military firm"
  },
  {
    Name: "Italian Job",
    img:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQVGxyRqPF8OytovxXed8KNws22DT0hn8gNFrSbKV-D9ur4IVf2",
    story:
      "the plot follows a motley crew of thieves who plan to steal gold from a former associate who double-crossed them."
  }
];

const romance = [
  {
    Name: "The Vow",
    img:
      "https://m.media-amazon.com/images/M/MV5BMjE1OTU5MjU0N15BMl5BanBnXkFtZTcwMzI3OTU5Ng@@._V1_.jpg",
    story:
      "Paige meets with a terrible accident which leaves her in a coma. When she wakes up, she doesn't recognise her husband Leo, who then tries to win her back by courting her again."
  },
  {
    Name: "Fault in our stars",
    img: "https://www.movienewsletters.net/photos/172913R1.jpg",
    story:
      "Two cancer-afflicted teenagers Hazel and Augustus meet at a cancer support group. The two of them embark on a journey to visit a reclusive author in Amsterdam."
  },
  {
    Name: "A walk to remember",
    img:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTu4TbW7RtFuA_nnxiVgFG2SUqFcOM-JaabE4C-O2WgoitxmTn-",
    story:
      "Landon is assigned community service after getting in trouble. His punishment also involves participating in the spring play, during which he falls in love with Jamie, the reverend's daughter."
  }
];

const horror = [
  {
    Name: "The conjuring",
    img:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQnHDbJFDDZYC5g9gHa6-NqBE8JUet_iRIPXJym8CtaHsVQa76M",
    story:
      "The Perron family moves into a farmhouse where they experience paranormal phenomena. They consult demonologists, Ed and Lorraine Warren, to help them get rid of the evil entity haunting them."
  },
  {
    Name: "Nightmare on Elm street",
    img:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ2RTGj6wIs_FAWBC4KCXPuvdHRnt4anbzb9i_CHuU4yl6rM6EL",
    story:
      "A young girl realises that she has to stay awake at any cost to avoid the clawed killer who is butchering her friends one by one in their dreams."
  },
  {
    Name: "Lights Out",
    img: "https://i.ytimg.com/vi/q7T7HnsuZsQ/movieposter.jpg",
    story:
      "Rebecca and her boyfriend try to investigate the connection between her mother and her imaginary friend, Diana, after her stepfather is murdered by a supernatural entity."
  },
  {
    Name: "Anabella",
    img:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQOlW5oFheta_jLvWYr__R8d1D7UqR3Vy8uhC2QzcZU7s9K4wdc",
    story:
      "John and Mia Form are attacked by a Satan worshipping couple, who uses their doll as a conduit to make their life miserable. This unleashes a string of paranormal events in the Forms' residence."
  }
];

const movieList = {
  action,
  horror,
  romance
};

export default function App() {
  const [genre, setGenre] = useState("action");

  return (
    <div className="App">
      <h1>Movie Recommendation App</h1>
      <h2>Click on any genre</h2>
      <ul>
        <li onClick={() => setGenre("action")}>Action</li>
        <li onClick={() => setGenre("romance")}>Romance</li>
        <li onClick={() => setGenre("horror")}>Horror</li>
      </ul>
      <div className="movies">
        {movieList[genre].map((movie, index) => {
          return (
            <div className="movie">
              <h2>{movie.Name}</h2>
              <img src={movie.img} alt={movie.Name} />
              <div className="movie_story">{movie.story}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
