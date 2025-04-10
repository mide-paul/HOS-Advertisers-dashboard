const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 because months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  
  export function formatDateToDefaultFormat(dateString: Date) {
    const date = new Date(dateString);
  
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, "0");
  
    return `${year}-${month}-${day}`;
  }
  
  export default formatDate;  