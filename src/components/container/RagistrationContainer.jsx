import RagistrationForm from "../ui/RagistrationForm";
import { useState } from "react";

function RagistrationContainer() {
  const [values, setValues] = useState({
    imageFile: null,
    productName: "",
    productDescription: "",
    productPrice: "",
    productTag: "",
  });

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);

    setValues({
      imageFile: null,
      productName: "",
      productDescription: "",
      productPrice: "",
      productTag: "",
    });
  };
  return (
    <RagistrationForm
      values={values}
      handleChange={handleChange}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default RagistrationContainer;
