import "./index.css";

function Regards({ nameRegards, id }) {
  return (
    <>
      <h2 className="h2">
        Bem Vindo! {nameRegards} {id}
      </h2>
    </>
  );
}

export default Regards;
