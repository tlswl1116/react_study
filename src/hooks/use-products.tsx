import { useEffect, useState } from "react";

const useProducts = <T,>({ url }: { url: string }) => {
  const [datas, setDatas] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [prevUrl, setPrevUrl] = useState(url);

  if (url !== prevUrl) {
    setPrevUrl(url);
    setLoading(true);
    setError(false);
  }

  useEffect(() => {
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
        // throw new Error("실패");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { loading, error, datas };
};

export default useProducts;
