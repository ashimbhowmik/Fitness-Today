export default function Pagination({
  productsPerPage,
  totalProducts,
  currentPage,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const getPageButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 4; // Adjust this number based on your design

    if (pageNumbers.length <= maxVisibleButtons) {
      // Show all buttons if total pages are less than or equal to maxVisibleButtons
      buttons.push(...pageNumbers);
    } else {
      // Calculate the range of page numbers to display around the current page
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(currentPage + 2, pageNumbers.length);

      if (currentPage <= 3) {
        // Display the first 'maxVisibleButtons - 1' pages if current page is close to the beginning
        endPage = maxVisibleButtons - 1;
      } else if (currentPage >= pageNumbers.length - 2) {
        // Display the last 'maxVisibleButtons - 1' pages if current page is close to the end
        startPage = pageNumbers.length - (maxVisibleButtons - 2);
      }

      if (startPage > 1) {
        buttons.push(1); // Add the first page number
        if (startPage > 2) {
          buttons.push("..."); // Add an ellipsis if there are skipped pages
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        buttons.push(i);
      }

      if (endPage < pageNumbers.length) {
        if (endPage < pageNumbers.length - 1) {
          buttons.push("..."); // Add an ellipsis if there are skipped pages
        }
        buttons.push(pageNumbers.length); // Add the last page number
      }
    }

    return buttons;
  };

  const pageButtons = getPageButtons();

  return (
    <>
      <ul className="flex space-x-2">
        {pageButtons.map((button, index) => (
          <li key={index}>
            <button
              className={`px-3 font-bold py-1 rounded ${
                button === currentPage
                  ? "bg-[#523EE8] text-white "
                  : "hover:bg-slate-200 ease-in duration-300"
              }`}
              onClick={() =>
                typeof button === "number" ? paginate(button) : null
              }
            >
              {button}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
