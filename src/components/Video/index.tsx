// import Checkbox from '@mui/material/Checkbox/Checkbox'
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';
import "./style.css";

import { FiMoreHorizontal, FiSend } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsChat, BsEmojiSmile, BsBookmark } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

// <div className="ConteinerVideo">
//     <div>

//     </div>
//     <div className='Conteinerinfo'>
//     <p>Titulo do Post</p>
//     <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
//     </div>
// </div>

export default function BoxVideo() {
  // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <header className="header-post">
        <div className="infos-post">
          <img
            className="img-header-post"
            src="https://github.com/maykbrito.png"
          />

          <p>maykbrito</p>
        </div>

        <FiMoreHorizontal />
      </header>

      <div className="img-post">
        <img src="https://github.com/maykbrito.png" />
      </div>

      <div className="footer-post">
        <IconContext.Provider value={{ size: "30px" }}>
          <section className="engagement-post">
            <div className="icons-1">
              <Checkbox
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />

              <Checkbox
                {...label}
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
              />
            </div>
          </section>
        </IconContext.Provider>

        <section className="like">
          <span>61 curtidas</span>
        </section>

        <div className="legend">
          <p>
            <span>maykbrito</span> Desenvolvemos peças exclusivas para a Black
            Friday com descontos de até 60% OFF. Em breve.
          </p>
        </div>

        <div className="time-post">
          <time>HÁ 1 HORA</time>
        </div>

        <div className="comment">
          <div className="fake-comment">
            <IconContext.Provider value={{ size: "25px" }}>
              <div className="icon">
                <BsEmojiSmile />
              </div>
            </IconContext.Provider>

            <input placeholder="Adicione um comentário..." />
          </div>

          <button>Publicar</button>
        </div>
      </div>
    </>
  );
}
