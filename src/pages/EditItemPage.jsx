import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getItemById, updateItem } from "../api/itemApi.js";
import ItemForm from "../components/ItemForm.jsx";

function EditItemPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const { data } = await getItemById(id);
        setItem(data);
      } catch (error) {
        console.error("Failed to fetch item", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      await updateItem(id, formData);
      navigate("/");
    } catch (error) {
      console.error("Failed to update item", error);
      alert("Failed to update item. Please try again.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!item) return <p>Item not found.</p>;

  return (
    <section>
      <div className="hero">
        <h1>Edit Item</h1>
        <p>Update the details of the item below.</p>
      </div>
      <ItemForm initialValues={item} onSubmit={handleSubmit} submitText="Update Item" />
    </section>
  );
}

export default EditItemPage;
