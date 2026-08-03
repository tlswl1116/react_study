import { useContext, useState, type ChangeEvent, type SubmitEvent } from "react";
import { DarkModeContext, DarkModeProvider } from "../context/DarkModeContext";
import { Button } from "./Buttons";

const FormContents = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)!;

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <Button text="darkmode" onClick={() => {}} />
      <form onSubmit={(e) => handleSubmit(e)} style={{ padding: "30px", backgroundColor: darkMode ? "black" : "white" }}>
        <label htmlFor="name">이름: </label>
        <input type="text" id="name" name="name" value={form.name} onChange={handleChange} />
        <label htmlFor="email">이메일: </label>
        <input type="text" id="email" name="email" value={form.email} onChange={handleChange} />
        <Button text="submit" onClick={toggleDarkMode} />
      </form>
    </>
  );
};

const AppForm = () => {
  return (
    <DarkModeProvider>
      <FormContents />
    </DarkModeProvider>
  );
};

export default AppForm;
