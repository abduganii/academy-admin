import  { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

 const LangArr = [
    {
      id: 1,
      lang: "ru"
    },
    {
      id: 2,
      lang: "uz"
    },
    {
      id: 3,
      lang: "en"
    }
  ];
  
export default function Lang() {
    const [openLang, setOpenLang] = useState(false);
    const { t, i18n } = useTranslation();
    
    const langFormat = () => {
      const currentLang: string = localStorage.getItem("lng") || "uz";
      const item = LangArr.find((el) => el.lang === currentLang);
      return item?.lang || "uz";
    };
    useEffect(() => {
      window.addEventListener("click", () => {
        setOpenLang(false);
      });
    }, []);
  
    
    const changeLanguage = (lng: any) => {
      i18n.changeLanguage(lng);
      localStorage.setItem("lng", lng);
    };
  return (
    <div
    onClick={(e) => {
      e.stopPropagation();
      setOpenLang(!openLang);
    }}
    style={{ padding: "13px" }}
    className="bg-[#0000005E] text-white rounded-lg  border-round-2xl ml-auto flex justify-content-between gap-2 align-items-center cursor-pointer relative"
  >
    <div className="flex  align-items-center  gap-2">
      <i
        className="pi pi-globe"
        style={{ fontSize: "1.2rem", color: "black" }}
      ></i>
      <p className="m-0 hidden md:block">{t(langFormat())}</p>
    </div>
    <i
      className="pi  pi-angle-down"
      style={{ fontSize: "1.2rem", color: "black" }}
    ></i>
    <div
      className={`${
        openLang ? "block" : "hidden"
      } absolute  left-0 bg-[#0000005E] border-round-2xl  py-2 w-full`}
      style={{ top: "55px", zIndex: 100 }}
    >
      {LangArr.map((e: any) => (
        <p
          key={e?.id}
          onClick={() => changeLanguage(e?.lang)}
          className="py-2 px-4 m-0 hover:bg-[#3030305e]"
        >
          {t(e?.lang)}
        </p>
      ))}
    </div>
  </div>
  )
}
