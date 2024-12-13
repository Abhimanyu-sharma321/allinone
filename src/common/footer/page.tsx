export const Footer = () => {
  return (
    <div>
      <ul
        className="flex"
        style={{
          justifyContent: "center",
          display: "flex",
          gap: "200px",
          border: "groove",
          width: "auto",
          height: "200px",
          background:"black",
          color:"white"
        }}
      >
        <li className="text-red-950">company</li>
        <li>About</li>
        <li>Email</li>
      </ul>
    </div>
  );
};
