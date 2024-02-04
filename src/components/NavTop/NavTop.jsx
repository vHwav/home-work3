function NavTop() {
  return (
    <nav>
      <ul className="flex gap-1 p-2 text-base font-semibold leading-4 top-11 bg-primary text-Contents-contentTertiary">
        <NavList />
      </ul>
    </nav>
  );
}
function NavList() {
  const handleLinkActive = () =>{

  }
  const navLists = [
    { url: "/src/pages/story/", subject: "선배님 스토리",  },
    { url: "/src/pages/exchange/", subject: "기기 거래", },
    { url: "/src/pages/story/", subject: "질의 응답", },
    { url: "/src/pages/board/", subject: "같이 해요", },
  ];
  return navLists.map((navList) => {
    return (
      <li key={navList.subject} className="mx-auto">
        <a href={navList.url} >{navList.subject}</a>
      </li>
    );
  });
}
export default NavTop;
