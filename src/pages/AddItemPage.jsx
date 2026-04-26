import { useNavigate } from "react-router-dom";
import { createItem } from "../api/itemApi.js";
import ItemForm from "../components/ItemForm.jsx";

function AddItemPage() {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      await createItem(formData);
      navigate("/");
    } catch (error) {
      console.error("Failed to create item", error);
      alert("Failed to create item. Please try again.");
    }
  };

  return (
    <section>
      <div className="hero">
        <h1>Add New Item</h1>
        <p>Fill in the details below to add a new item to the inventory.</p>
      </div>
      <ItemForm onSubmit={handleSubmit} submitText="Add Item" />
    </section>
  );
}

export default AddItemPage;
