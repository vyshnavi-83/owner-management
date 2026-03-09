import { useState } from "react";

export default function OwnersTable({ owners, onEdit }) {

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;

  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;

  const currentOwners = owners.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(owners.length / rowsPerPage);

  const getInitials = (name) => {
    const parts = name.split(" ");
    return parts.map(p => p[0]).join("").toUpperCase();
  };

  return (
    <div className="tableCard">

      <h3>Registered Owners</h3>

      <table>
        <thead>
          <tr>
            <th>Owner</th>
            <th>Type</th>
            <th>Capital</th>
            <th>Ratio</th>
            <th>Status</th>
            <th>Actions</th>
            <th>Owner ID</th>
          </tr>
        </thead>

        <tbody>

          {currentOwners.map((owner, index) => (
            <tr key={index}>

              <td className="ownerCell">
                <div className="avatar">{getInitials(owner.name)}</div>
                {owner.name}
              </td>

              <td>{owner.type}</td>
              <td>{owner.capital}</td>
              <td>{owner.ratio}%</td>

              <td>
                <span className={`status ${owner.status === "Active" ? "active" : "disabled"}`}>
                  {owner.status}
                </span>
              </td>

              <td>
                <button
                  className="editBtn"
                  onClick={() => onEdit(owner)}
                >
                  <td>{owner.id}</td>
                  Edit
                </button>
              </td>

            </tr>
          ))}

        </tbody>
      </table>

      {/* Pagination */}

      <div className="pagination">

        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          ◀
        </button>

        <span>Page {currentPage} of {totalPages}</span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          ▶
        </button>

      </div>

    </div>
  );
}