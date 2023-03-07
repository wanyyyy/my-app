import axios from "../api/axios";
import { useEffect, useState } from "react";
import { StoreType } from "../pages/api/StoreType";

const StoreList = () => {
  // api 통신
  const [store, setStore] = useState<StoreType[]>();

  const axiosTest = async () => {
    const res = await axios.get("/babzip");
    // console.log(res);
    setStore(res.data);
  };

  useEffect(() => {
    axiosTest();
  }, []);

  // 검색
  const [searchMenu, setSearchMenu] = useState("");

  return (
    <>
      <div className="search-box">
        <input
          type="text"
          name="search-inp"
          maxLength={255}
          tabIndex={1}
          placeholder="메뉴 검색 (ex. 돈까스, 떡볶이)"
          required
          onChange={(e) => {
            setSearchMenu(e.target.value);
          }}
        />
        {/* <button
          type="button"
          name="search-sub"
          onClick={axiosTest}
          tabIndex={2}
        >
          🔍
        </button> */}
      </div>
      <div className="content-box">
        <section className="content">
          {store &&
            store
              .filter((val) => {
                if (searchMenu == "") {
                  return val;
                } else if (val.menu.includes(searchMenu)) {
                  return val;
                }
              })
              .map((item) => {
                return (
                  <div className="babzip">
                    <div className="title">{item.no_name}</div>
                    <p>{item.menu}</p>
                    <img className="star" style={{ marginLeft: "80%" }} />
                    <span>4.3</span>
                  </div>
                );
              })}
        </section>
      </div>
    </>
  );
};

export default StoreList;
