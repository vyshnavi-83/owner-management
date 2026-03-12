import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import OwnersTable from "../components/OwnersTable";
import CapitalChart from "../components/CapitalChart";

export default function OwnerManagement() {

  const [owners, setOwners] = useState([
    {
      id: 1,
      name: "John Doe",
      type: "Partner",
      capital: "Fixed",
      ratio: "40",
      status: "Active"
    },
    {
      id: 2,
      name: "Alice Smith",
      type: "Partner",
      capital: "Fluctuating",
      ratio: "35",
      status: "Disabled"
    },
    {
      id: 3,
      name: "TechCorp Inc",
      type: "Corporate",
      capital: "Fixed",
      ratio: "25",
      status: "Active"
    },
    {
      id: 4,
      name: "Jack",
      type: "Corporate",
      capital: "Fluctuating",
      ratio: "25",
      status: "Active"
    }
  ]);

  const [editingOwner, setEditingOwner] = useState(null);

  const handleEdit = (owner) => {
    setEditingOwner(owner);
  };

  const handleAddOwner = () => {
    setEditingOwner({
      id: owners.length + 1,
      name: "",
      type: "Partner",
      capital: "Fixed",
      ratio: "",
      status: "Active"
    });
  };

  const handleSave = () => {

    const existing = owners.find(o => o.id === editingOwner.id);

    if (existing) {
      const updatedOwners = owners.map(o =>
        o.id === editingOwner.id ? editingOwner : o
      );
      setOwners(updatedOwners);
    } else {
      setOwners([...owners, editingOwner]);
    }

    setEditingOwner(null);
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="content">

        {/* HEADER */}
        <div className="headerSection">
          <h1>Owner Management</h1>
          <p>Manage equity holders, profit sharing ratios, and capital structures.</p>
        </div>

        <div className="topSection">

          {/* TABLE SECTION */}
          <div className="tableSection">
            <div className="card">

              <div className="tableHeader">

                <h3>Registered Owners</h3>

                <div className="tableActions">
                  <input
                    type="text"
                    placeholder="Search owners..."
                    className="searchInput"
                  />

                  <button className="addOwnerBtn" onClick={handleAddOwner}>
                    + Add Owner
                  </button>
                </div>

              </div>

              <OwnersTable owners={owners} onEdit={handleEdit} />

            </div>
          </div>

          {/* EDIT / ADD OWNER PANEL */}

          {editingOwner && (
            <div className="editSection">
              <div className="card">

                <h3>
                  {editingOwner.name ? "Edit Owner" : "Add Owner"}
                </h3>

                <label>Owner Name</label>
                <input
                  value={editingOwner.name}
                  onChange={(e) =>
                    setEditingOwner({ ...editingOwner, name: e.target.value })
                  }
                />

                <label>Owner Type</label>
                <select
                  value={editingOwner.type}
                  onChange={(e) =>
                    setEditingOwner({ ...editingOwner, type: e.target.value })
                  }
                >
                  <option value="Partner">Partner</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Investor">Investor</option>
                </select>

                <label>Capital Type</label>
                <select
                  value={editingOwner.capital}
                  onChange={(e) =>
                    setEditingOwner({ ...editingOwner, capital: e.target.value })
                  }
                >
                  <option value="Fixed">Fixed</option>
                  <option value="Fluctuating">Fluctuating</option>
                </select>

                <label>Profit Ratio (%)</label>
                <input
                  type="number"
                  value={editingOwner.ratio}
                  onChange={(e) =>
                    setEditingOwner({ ...editingOwner, ratio: e.target.value })
                  }
                />

                <button className="saveBtn" onClick={handleSave}>
                  Save
                </button>

              </div>
            </div>
          )}

        </div>

        {/* CAPITAL ALLOCATION CHART */}

<div className="chartSection">
  <div className="card">

    <h3>Capital Allocation</h3>

    <CapitalChart owners={owners} />

    {/* Chart Legend */}
    <div className="chartLegend">
      {owners.map((owner, index) => (
        <div key={owner.id} className="legendItem">
          <span
            className="legendColor"
            style={{
              backgroundColor: [
                "#4f46e5",
                "#22c55e",
                "#f59e0b",
                "#ef4444",
                "#3b82f6"
              ][index % 5]
            }}
          ></span>
          {owner.name} ({owner.ratio}%)
        </div>
      ))}
    </div>

  </div>
</div>
      </div>
    </div>
  );
}