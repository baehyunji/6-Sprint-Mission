import FileInput from "./FileInput";
import styles from "./RagistrationForm.module.css";

function ProductRagistrationForm({
  values,
  handleChange,
  handleInputChange,
  handleSubmit,
}) {
  return (
    <form className={styles.product_ragistration_form} onSubmit={handleSubmit}>
      <div className={styles.product_ragistration_form_wrapper}>
        <h1>상품등록하기</h1>
        <button className={styles.disabledButton} type="submit">
          등록
        </button>
      </div>
      <label htmlFor="product-image">상품 이미지</label>
      <FileInput
        name="imageFile"
        value={values.imageFile}
        onChange={handleChange}
      ></FileInput>
      <label htmlFor="product-name">상품명</label>
      <input
        name="productName"
        value={values.productName}
        onChange={handleInputChange}
        id="product-name"
        type="text"
        placeholder="상품명을 입력해주세요"
        required
        autoComplete="off"
      ></input>
      <label htmlFor="product-description">상품 소개</label>
      <textarea
        name="productDescription"
        value={values.productDescription}
        onChange={handleInputChange}
        id="product-description"
        placeholder="상품 소개를 입력해주세요"
        required
        autoComplete="off"
      ></textarea>
      <label htmlFor="product-price">판매가격</label>
      <input
        name="productPrice"
        value={values.productPrice}
        onChange={handleInputChange}
        id="product-price"
        type="number"
        placeholder="판매 가격을 입력해주세요"
        min="0"
        required
        autoComplete="off"
      ></input>
      <label htmlFor="product-tag">태그</label>
      <input
        name="productTag"
        value={values.productTag}
        onChange={handleInputChange}
        id="product-tag"
        type="text"
        placeholder="태그를 입력해주세요"
        required
        autoComplete="off"
      ></input>
      {values.productTag && (
        <p className={styles.tag}>
          {values.productTag}
          <button className={styles.delete_button}>X</button>
        </p>
      )}
    </form>
  );
}

export default ProductRagistrationForm;
