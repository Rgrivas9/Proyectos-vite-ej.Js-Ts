import "./footer.css";
import { Button } from "../button/button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/icons/twitter.png", "Twitter","Twitter icon")}
${Button("/icons/github.png", "GitHub","GitHub icon")}
${Button("/icons/linkedin.png", "LinkedIn","LinkedIn icon")}
${Button("/icons/telegram.png", "Telegram","Telegram icon")}
</div>
`;