import "./button.css";

export const Button = (icon, text, altText) => `
<button class="my-btn">
<img src=${icon} alt='${altText} icon'/>
<h4>${text}</h4>
</button>
`;