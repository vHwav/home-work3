export default function ProfileUser() {
  return (
    <div className="profileCard-user flex justify-between items-center bg-background my-3 p-3 rounded-lg">
      <div className>
        <p
          data-field="username"
          className="rendering-box profile-textPrivacy text-lg font-semibold"
        />
        <p
          data-field="company"
          className="rendering-box text-sm text-secondary inline-block border border-secondary rounded-full px-1"
        >
          미등록
        </p>
      </div>
      <div className="profileCard-user-profileImg w-[4.125rem] h-[4.125rem] rounded-full overflow-hidden shadow-md border bodrer-gray-100">
        <img
          className="rendering-photo w-full h-full"
          data-field="avatar"
          src="/src/assets/popcorn.png"
          alt="프로필 사진"
        />
      </div>
    </div>
  );
}
