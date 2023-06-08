import "../fonts.css";
import Button from "./Button";

export default function MainHeader() {
  return (
    <section className="bg-[url('imgs/main_header.jpg')] min-h-[1540px] bg-center bg-cover flex ">
      <div className="  text-beige max-w-[1050px]">
        <div className="p-[100px] pl-[140px] bg-[#121214]/[.4] font-nexa ">
          <h1 className="text-5xl font-black">
            Висококачествено обзавеждане на достъпни цени.
          </h1>
          <p className="mt-[50px]">
            Удобството и уюта са неизменна част от превръщането на жилището в
            дом.
          </p>
          <div className="pl-[50px]">
            <div>
              <div className=" mt-[60px] mb-[30px] p-[50px] w-[50px] bg-beige rounded-full"></div>
              <div className="pl-[45px] border-l-2 border-beige">
                <h6 className="font-bold text-xl mt-2">
                  Индивидуални проекти за обзавеждане
                </h6>
                <p className="font-book text-xl mt-2">
                  Качествено и функционално оформление
                </p>
              </div>
            </div>

            <div>
              <div className=" mt-[60px] mb-[30px] p-[50px] w-[50px] bg-beige rounded-full"></div>
              <div className="pl-[45px] border-l-2 border-beige">
                <h6 className="font-bold text-xl mt-2">
                  Индивидуални проекти за обзавеждане
                </h6>
                <p className="font-book text-xl mt-2">
                  Качествено и функционално оформление
                </p>
              </div>
            </div>

            <div>
              <div className=" mt-[60px] mb-[30px] p-[50px] w-[50px] bg-beige rounded-full"></div>
              <div className="pl-[45px] border-l-2 border-beige">
                <h6 className="font-bold text-xl mt-2">
                  Индивидуални проекти за обзавеждане
                </h6>
                <p className="font-book text-xl mt-2">
                  Качествено и функционално оформление
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-[190px] mt-[50px]">
          <Button string={"запитване"} variant={"lightFull"} />
          <Button variant={"lightEmpty"} />
        </div>
      </div>
    </section>
  );
}
