import { useState } from "react";
import useProducts from "../hooks/use-products";
import { Button, ButtonSub } from "./Buttons";

interface ProductProps {
  name: string;
  category: {
    name: string;
  }[];
}

const AppProduct = () => {
  const [checked, setChecked] = useState(false);
  const { loading, error, datas } = useProducts<ProductProps>({ url: !checked ? "/data/product.json" : "/data/sale_product.json" });

  return (
    <div>
      <h1>판매 상품</h1>
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="sale">세일상품</label>
        <input type="checkbox" id="sale" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
      </div>
      {loading ? (
        <h2>로딩중...</h2>
      ) : error ? (
        <h2>에러ㅜㅜ</h2>
      ) : (
        <dl>
          {datas?.map((item, idx) => {
            return (
              <div key={`main-${idx}`}>
                <dt>{item.name}</dt>
                {item.category?.map((cate, idx2) => {
                  return <dd key={`sub-${idx}-${idx2}`}>{cate.name}</dd>;
                })}
              </div>
            );
          })}
        </dl>
      )}

      <div>
        <Button text="확인" onClick={() => {}} />
        <ButtonSub text="취소" onClick={() => {}} />
      </div>
    </div>
  );
};

export default AppProduct;
