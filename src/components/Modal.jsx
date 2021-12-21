import React, { useRef, useState } from "react";
import { CloseIcon } from "../assets/icons/icons";
import moment from "moment";
import { uid } from "uid";

const baseUrl = "http://localhost:3000";

const Modal = ({ onClick }) => {
  const [gender, setGender] = useState("famale");
  const [position, setPosition] = useState("students");
  const form = useRef(null);

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const data = {
      id: uid(),
      name: formData.get("name"),
      dateOfBirth: moment().format(formData.get("dateOfBirth"), "MM-DD-YYYY"),
      eyeColour: formData.get("eyeColour"),
      hairColour: formData.get("hairColour"),
      gender: formData.get("gender"),
      hogwartsStudent: formData.get("position") === "students" ? true : false,
      hogwartsStaff: formData.get("position") === "staff" ? true : false,
      image: formData.get("image"),
    };
    postData(`${baseUrl}/${formData.get("position")}/`, data);
  };

  const postData = (url = "", data = {}) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(onClick);
  };

  return (
    <div className="modal" tabIndex="-1" role="dialog">
      <div className="modal__dialog" role="document">
        <div className="modal__content">
          <div className="modal__header">
            <div className="modal__header-title">
              <h3>Agrega un personaje</h3>
              <div style={{ cursor: "pointer" }} onClick={onClick}>
                <CloseIcon />
              </div>
            </div>
          </div>
          <div className="modal__body">
            <form action="/" className="form" ref={form}>
              <div className="row">
                <div className="column">
                  <label className="title__inputs">NOMBRE</label>
                  <input name="name" className="inputs" type="text" />
                </div>
                <div className="column">
                  <label className="title__inputs">CUMPLEAÑOS</label>
                  <input name="dateOfBirth" className="inputs" type="date" />
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <label className="title__inputs">COLOR DE OJOS</label>
                  <input name="eyeColour" className="inputs" type="text" />
                </div>
                <div className="column">
                  <label className="title__inputs">COLOR DE PELO</label>
                  <input name="hairColour" className="inputs" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <label className="title__inputs">GÉNERO</label>
                  <div className="radio-button">
                    <input
                      type="radio"
                      id="famale"
                      name="gender"
                      checked={gender === "famale"}
                      onChange={() => setGender("famale")}
                      value="famale"
                    />
                    <label htmlFor="famale">Mujer</label>

                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      checked={gender === "male"}
                      onChange={() => setGender("male")}
                      value="male"
                    />
                    <label htmlFor="male">Hombre</label>
                  </div>
                </div>
                <div className="column">
                  <label className="title__inputs">POSICIÓN</label>
                  <div className="radio-button">
                    <input
                      id="students"
                      name="position"
                      value="students"
                      type="radio"
                      checked={position === "students"}
                      onChange={() => setPosition("students")}
                    />
                    <label htmlFor="students">Estudiante</label>
                    <input
                      id="staff"
                      name="position"
                      value="staff"
                      type="radio"
                      checked={position === "staff"}
                      onChange={() => setPosition("staff")}
                    />
                    <label htmlFor="staff">Staff</label>
                  </div>
                </div>
              </div>
              <div className="modal__image-container">
                <label className="title__inputs">FOTOGRAFÍA</label>
                <input name="image" type="file" />
              </div>
            </form>
          </div>
          <div className="modal__footer">
            <button className="filter__button" onClick={handleSubmit}>
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
