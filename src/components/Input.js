import "./Input.css";

export default function Input({ title, placeholder, isDark }) {
  return (
    <form className={isDark ? "Input Input--dark" : "Input"}>
      <label className="Input__title">{title}</label>
      <input
        className="Input__textfield"
        name="nameOfPlayer"
        placeholder={placeholder}
        type="text"
      ></input>
    </form>
  );
}
