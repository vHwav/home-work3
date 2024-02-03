import { useEffect, useId, useState } from "react";
import userData from "../../data/users.json";

const API = import.meta.env.VITE_PB_API;

async function fetchUsers() {
  try {
    const response = await fetch(`${API}/api/collections/users/records`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
fetchUsers();

function ProfileForm() {
  const submitProfileData = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    Array.from(formData.entries()).map(([name, value]) => {
      console.log(name, value);
    });
  };
  return (
    <form className="bg-background pb-4" onSubmit={submitProfileData}>
      <div className="flex justify-between ">
        <label htmlFor="avatar" className="font-semibold text-[14px] py-4">
          아바타 변경
        </label>
        <div className="w-10 h-10 rounded-full relative">
          <div className="w-10 h-10 rounded-full overflow-hidden relative">
            <img
              data-field="avatar"
              className="rendering-photo profile-preview z-10 absolute pointer-events-none bg-background"
              src="/src/assets/popcorn.png"
              alt="프로필 사진 추가"
            />
          </div>
          <input
            id="avatar"
            type="file"
            className="w-10 h-10 rounded-full bg-secondary absolute top-0 appearance-none z-0"
          />
        </div>
      </div>

      <ProfileInput onSubmit={submitProfileData}></ProfileInput>
      <div className="px-4 py-3 flex justify-between">
        <span className="font-semibold text-[14px]">성별</span>
        <div className="text-base">
          <input
            id="male"
            name="gender"
            defaultValue="male"
            type="radio"
            className="radio-gender"
          />
          <label htmlFor="male" className="mr-2">
            남자
          </label>
          <input
            id="female"
            name="gender"
            defaultValue="female"
            type="radio"
            className="radio-gender"
          />
          <label htmlFor="female">여자</label>
        </div>
      </div>
      <button
        type="submit"
        className=" block px-4 rounded-lg py-2 bg-gray-100 mx-auto "
      >
        저장 및 상세페이지 이동
      </button>
    </form>
  );
}

function ProfileInput({ onSubmit }) {
  const ProfileSubjects = ["아이디", "닉네임", "하는 일", "자격"];
  const profileNull = "";
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    fetchUsers({ signal: controller.signal }).then((data) => {
      setUserList(data?.items);
      console.log(Object.keys(userList[0]));
    });
    return controller.abort();
  }, []);
  const profileFields = Object.keys(userList[0]);

  return profileFields.map((field) => {
    return (
      <div key={field} className="px-4 py-3 flex justify-between">
        <label htmlFor={field} className="font-semibold text-[14px]">
          {field}
        </label>
        <input
          {...onSubmit}
          defaultValue={profileNull}
          id={field}
          type="text"
          className="w-[30%] text-base border rounded-full p-1 text-center"
          placeholder="미입력"
        />
      </div>
    );
  });
}

export default ProfileForm;
