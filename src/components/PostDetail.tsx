export default function PostDetail() {
  return <>
  <div className="post__detail">
    <div className="post__box">
      <div className="post__title">
        Post Title
      </div>
      <div className="post__profile-box">
                <div className="post__profile"></div>
                <div className="post__author-name">User</div>
                <div className="post__date">2023-10-01</div>
              </div>
              <div className="post__title"></div>
              <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">수정</div>
              </div>
              <div className="post__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
      </div>
  </div>
  </>
}