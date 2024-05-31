import { useRef } from "react";
import iconImg from "../../assets/plus-icon.png";
import styles from "./FileInput.module.css";

function FileInput({ name, value, onChange }) {
  const inputRef = useRef();

  let preview = null;

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null);
  };

  return (
    <div className={styles.image_upload}>
      <div className={styles.image_upload_frame}>
        <label
          htmlFor="file-input"
          className={styles.image_upload_frame_wrapper}
        >
          <img src={iconImg} alt="플러스 아이콘" />
          <p className={styles.image_upload__p}>이미지 등록</p>
        </label>
        <input
          id="file-input"
          className={styles.file_input}
          type="file"
          ref={inputRef}
          onChange={handleChange}
        />
      </div>
      {value && (
        <img
          className={styles.image_upload__image}
          src={URL.createObjectURL(value)}
          alt="이미지"
        />
      )}
      {preview && (
        <img
          className={styles.image_upload__image}
          src={preview}
          alt="이미지"
        />
      )}
      {value && (
        <button
          className={styles.image_delete_button}
          onClick={handleClearClick}
        >
          X
        </button>
      )}
    </div>
  );
}

export default FileInput;
