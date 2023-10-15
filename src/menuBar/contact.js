import "./contact.css";
export const Contact = () => {
  return (
    <div>
      <div className="telefon">
        Telefon: 0256 404 354; Email: simona.stanjic@upt.ro
      </div>
      <div className="adresa">
        Adresă: Aleea Studenţilor 2, 300551 Timişoara, (la intersecţia cu Aleea
        F.C. Ripensia).
      </div>
      <div className="google-maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11136.553316281317!2d21.239718!3d45.7483727!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455d88c86bf153%3A0xf59dd6cf2bf96624!2sRestaurant%20Universitar%20Politehnica!5e0!3m2!1sen!2sro!4v1697360076485!5m2!1sen!2sro"
          width="600"
          height="400"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};
