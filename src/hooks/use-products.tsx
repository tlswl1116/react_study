import { useEffect, useState } from "react";

const useProducts = <T,>({ url }: { url: string }) => {
  const [datas, setDatas] = useState<T[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!loading) {
      setLoading(true);
      setError(false);
    }

    fetch(url, {
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) throw new Error("데이터 요청 실패");
        return res.json();
      })
      .then((data: T[]) => {
        setDatas(data ?? []);
      })
      .catch(() => {
        setError(true);
        throw new Error("실패");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { loading, error, datas };
};

export default useProducts;
