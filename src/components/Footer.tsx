import { Link } from "react-router-dom";

export default function Footer () {
  return (
  <footer className="footer">
    <Link to="/">글 쓰기</Link>
    <Link to="/posts">게시글</Link>
    <Link to="/profile">프로필</Link>
  </footer>
  )
}