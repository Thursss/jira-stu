import { FormEvent } from "react";

export const LoginPage = () => {
  const handSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
  }

  return (
    <form action="#" onSubmit={handSubmit}>
      <div>
        <label htmlFor="">用户名</label>
        <input type="text"  id="username" />
      </div>
      <div>
        <label htmlFor="">密码</label>
        <input type="text" id="password" />
      </div>
      <button type="submit">登录</button>
    </form>
  );
}