import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Social Media */}
        <div className="social-media">
          <h3>دنبال کنید</h3> {/* "Follow Us" in Persian */}
          <ul>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-instagram"></i> اینستاگرام {/* "Instagram" in Persian */}
              </a>
            </li>
            <li>
              <a
                href="https://telegram.me"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-telegram"></i> تلگرام {/* "Telegram" in Persian */}
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-facebook"></i> فیسبوک {/* "Facebook" in Persian */}
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>تماس با ما</h3> {/* "Contact Us" in Persian */}
          <p>آدرس: اصفحان . خیابان خاقانی . نبش کوچه چهارسوقها</p> {/* "Address" in Persian */}
          <p>تلفن: +98 123 456 789</p> {/* "Phone" in Persian */}
          <p>ایمیل: info@yourstore.com</p> {/* "Email" in Persian */}
        </div>

       

        {/* Map */}
        <div className="map-container">
          <h3>موقعیت فروشگاه</h3> {/* "Our Location" in Persian */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209.99664977005344!2d51.65063518500121!3d32.63425092020367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc3700795861bd%3A0xbf335258d19910c2!2z2YHYsdmI2LTar9in2Ycg2K7Yp9mC2KfZhtmK!5e0!3m2!1sen!2sfr!4v1735543599196!5m2!1sen!2sfr"
            width="200"
            height="150"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2024  بزرگ استایل. تمامی حقوق محفوظ است.</p> {/* "All rights reserved" in Persian */}
      </div>
    </footer>
  );
}

export default Footer;
