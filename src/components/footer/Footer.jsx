import React from "react";
import "./footer.css";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h4 className="footer__title">Made with ❤️ and React </h4>



                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/vivek-mahindrakar-24b097219" className="footer__social-link" target="_blank">
                        <i class="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://www.instagram.com/vivek_mahindrakar/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>

                    <a href="https://github.com/vivekmahindrakar" className="footer__social-link" target="_blank">
                        <i class="bx bxl-github"></i>
                    </a>
                </div>
                <span className="footer__copy">&#169; {new Date().getFullYear()} Vivek Mahindrakar</span>
            </div>
        </footer>
    )
}
export default Footer
