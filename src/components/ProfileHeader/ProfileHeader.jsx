export default function ProfileEdit({ children }) {
  const handleClose = () => {
    history.back();
  };
  return (
    <div className="flex justify-between w-full py-4 px-5 bg-background ">
      <span>{children}</span>
      <Button onClick={handleClose}></Button>
    </div>
  );
}

function Button() {
  const closeimgSrc = "/images/close.svg";
  return (
    <button className="">
      <img src={closeimgSrc} alt="닫힘버튼" />
    </button>
  );
}
