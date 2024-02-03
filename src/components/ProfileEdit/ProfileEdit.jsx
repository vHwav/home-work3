export default function ProfileHeader() {
  return (
    <h2 className="flex items-center gap-0.5 my-4 mx-4 text-base">
      프로필카드
      <span title="유저 정보란입니다">
        <img src="/images/information.svg" alt="정보" />
      </span>
    </h2>
  );
}
