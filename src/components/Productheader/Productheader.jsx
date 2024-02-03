function Productheader() {
  return (
    <header className="region-nav sticky top-0 bg-background h-[2.8125rem]">
      <div className="region-nav__wrapper flex justify-between w-full px-5 py-2">
        <div className="flex flex-shrink-0 select-wrapper">
          <select className="w-32 text-lg font-semibold appearance-none">
            <option value>남가좌제2동</option>
            <option value>호원2동</option>
          </select>
          <img
            src="/public/images/direction.svg"
            className="w-4 h-4 translate-y-1 pointer-events-none -translate-x-7"
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <a href="/src/pages/search/" className="flex-shrink-0">
            <img
              src="/public/images/search.svg"
              className="w-[1.625rem] h-[1.625rem]"
              alt="검색"
            />
          </a>
          <a href="/src/pages/story/" className="flex-shrink-0">
            <img src="/public/images/hamburger.svg" alt="메뉴" />
          </a>
          <a href="#none" className="flex-shrink-0">
            <img
              src="/public/images/alramBell.svg"
              className="w-[1.25rem] h-[1.25rem]"
              alt="알림"
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Productheader;
