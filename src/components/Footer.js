import React from 'react';
import "./Footer.css";
import "./learnMore.scss";
function Footer() {
    return (
        <div style={{ valign: "bottom" }}>
            <footer class="portfolio-experiment">
                <a>
                    <span class="text">Hover me</span>
                    <span class="line -right"></span>
                    <span class="line -top"></span>
                    <span class="line -left"></span>
                    <span class="line -bottom"></span>
                </a>
            </footer>
        </div>
    )
}

export default Footer
