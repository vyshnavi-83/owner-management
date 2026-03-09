import { useEffect, useState } from "react";

export default function OwnerForm({ selectedOwner, onSave }) {

  const [form, setForm] = useState({
    name: "",
    type: "Partner",
    capital: "Fixed",
    ratio: ""
  });

  useEffect(() => {
    if (selectedOwner) {
      setForm(selectedOwner);
    }
  }, [selectedOwner]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(form);
  };

  return (
    <div className="formCard">
      <h3>Edit Owner Details</h3>

      <label>Owner Name</label>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <label>Owner Type</label>
      <select
        name="type"
        value={form.type}
        onChange={handleChange}
      >
        <option>Partner</option>
        <option>Individual</option>
        <option>Corporate</option>
      </select>

      <label>Capital Type</label>
      <select
        name="capital"
        value={form.capital}
        onChange={handleChange}
      >
        <option>Fixed</option>
        <option>Fluctuating</option>
      </select>

      <label>Profit Ratio %</label>
      <input
        name="ratio"
        value={form.ratio}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Save Owner</button>
    </div>
  );
}