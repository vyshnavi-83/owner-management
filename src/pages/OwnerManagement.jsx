// Owner Management Featureimport;
import Sidebar from "../components/Sidebar";
import OwnersTable from "../components/OwnersTable";
import OwnerForm from "../components/OwnerForm";
import CapitalChart from "../components/CapitalChart";

export default function OwnerManagement() {

  const [owners, setOwners] = useState([
  { name: "John Doe", type: "Partner", capital: "Fixed", ratio: 40, status: "Active" },
  { name: "Alice Smith", type: "Partner", capital: "Fluctuating", ratio: 35, status: "Active" },
  { name: "TechCorp Inc", type: "Corporate", capital: "Fixed", ratio: 20, status: "Active" },
  { name: "Michael Ross", type: "Individual", capital: "Fixed", ratio: 5, status: "Disabled" },
  { name: "Jack", type: "Partner", capital: "Fixed", ratio: 10, status: "Active" },
  { name: "Joe", type: "Partner", capital: "Fluctuating", ratio: 25, status: "Active" }
]);

  const [selectedOwner, setSelectedOwner] = useState(null);

  const handleEdit = (owner) => {
    setSelectedOwner(owner);
  };

  const handleSave = (updatedOwner) => {
    const updated = owners.map((o) =>
      o.name === updatedOwner.name ? updatedOwner : o
    );

    setOwners(updated);
    setSelectedOwner(null);
  };

  const handleAddOwner = () => {
    setSelectedOwner({
      name: "",
      type: "Partner",
      capital: "Fixed",
      ratio: ""
    });
  };
  const generateOwnerId = () => {
  const nextId = owners.length + 1;
  return `OWN-${String(nextId).padStart(3, "0")}`;
};
const addOwner = (ownerData) => {
  const newOwner = {
    id: generateOwnerId(),
    ...ownerData
  };

  setOwners([...owners, newOwner]);
};

  return (
    <div className="container">

      <Sidebar />

      <div className="main">

        <div className="headerBar">
          <h2>Owner Management</h2>

          <button className="addBtn" onClick={handleAddOwner}>
            + Add New Owner
          </button>
        </div>

        <div className="content">

          <OwnersTable
            owners={owners}
            onEdit={handleEdit}
          />

          <OwnerForm
            selectedOwner={selectedOwner}
            onSave={handleSave}
          />

        </div>

      </div>
    </div>
  );
}