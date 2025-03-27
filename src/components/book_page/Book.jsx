import React, { useContext, useEffect, useState } from "react";
import "../book_page/book.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { TbSend } from "react-icons/tb";
import { FilterContext } from "../../context";
import Aos from "aos";

const Book = () => {
  const { phone, content, handleChange } = useContext(FilterContext);

  useEffect(() => {
    Aos.init({
      duration: 1000, // Animatsiya davomiyligi (ms)
    });
  }, []);


  return (
    <div className="book" id="book">
      <div className="container">
        <div className="book_main">
          <div className="book_title">
            <h1  data-aos="fade-up">
              {content.contact_title1.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="last-word">
                {content.contact_title1.split(" ").pop()}
              </span>
            </h1>
          </div>

          <div className="prosta_div" data-aos="zoom-in">
            <form action="#" method="POST">
              <div className="contact_inputs">
                <input
                  className="name_input"
                  type="text"
                  placeholder={content.placheholder_name}
                />
                <input
                  className="email_input"
                  type="email"
                  placeholder={content.placheholder_email}
                />
                <div className="phone-input-container phone_input">
                  <PhoneInput
                    country="uz"
                    value={phone}
                    onChange={handleChange}
                    enableSearch={true}
                    searchPlaceholder="Search country..."
                    inputStyle={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                    }}
                    containerStyle={{ marginBottom: "10px" }}
                  />
                </div>
                <input
                  className="comment_input"
                  type="text"
                  placeholder={content.placheholder_comment}
                />
                <button type="submit" className="book_send_btn">
                  {content.book_btn}
                  <span>
                    <TbSend />
                  </span>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Book;
