import styles from "../ui/CommentDetails.module.css";
import backIcon from "../../assets/back-icon.png";
import { Link } from "react-router-dom";
import { elapsedTime } from "../../utils";

function CommentDetails({ comments }) {
  return (
    <div className={styles.commentWrapper}>
      <div>
        <h2>문의하기</h2>
        <form>
          <input
            name="question"
            type="text"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고,불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            required
            autoComplete="off"
          />
          <div className={styles.buttonWrapper}>
            <button className={styles.disabledButton} type="submit">
              등록
            </button>
          </div>
        </form>
      </div>
      <div>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.comment}>
            <p className={styles.content}>{comment.content}</p>
            <div className={styles.contentWrapper}>
              <img src={comment.writer.image} alt="작성자 이미지" />
              <div className={styles.commentContent}>
                <p className={styles.nickname}>{comment.writer.nickname}</p>
                <p className={styles.updatedAt}>
                  {elapsedTime(comment.updatedAt)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/items" className={styles.goBackButton}>
        <span>목록으로 돌아가기</span>
        <img className={styles.backIcon} src={backIcon} alt="돌아가기 아이콘" />
      </Link>
    </div>
  );
}

export default CommentDetails;
