import dayjs from "dayjs";
import 'dayjs/locale/zh' 
dayjs.locale('zh')
const Promo = () => {
  return <div className="mb-2 text-xl text-white">{dayjs().format('YYYY-MM-DD') }</div>;
};

export default Promo;
