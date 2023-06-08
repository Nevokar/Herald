import "../fonts.css";
import Button from "./Button";

export default function AboutSection() {
  return (
    <section className="min-h-[1230px] bg-[url('imgs/aboutus.jpg')] bg-center bg-cover">
      <div className="w-[75%] flex flex-col items-center m-auto">
        <h2 className="text-5xl font-nexa font-black text-black pt-[120px] pb-[100px]">
          За Нас
        </h2>
        <p className="mb-[50px] font-nexa font-regular text-xl text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          provident quisquam recusandae voluptatum consequuntur, illo officia,
          qui possimus expedita voluptatibus quidem molestias porro est quasi
          accusantium placeat error explicabo sit!
        </p>
        <p className="mb-[50px] font-nexa font-book text-xl text-black">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
          molestiae laboriosam praesentium, fuga perferendis nisi, est mollitia
          soluta magnam eius officiis, accusantium culpa assumenda expedita
          consequatur natus quibusdam possimus? Provident minus ut quae nihil
          reiciendis!
        </p>
        <p className="mb-[50px] font-nexa font-book text-xl text-black">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          nihil explicabo debitis cupiditate cumque quia, eum placeat sit
          molestiae asperiores deserunt eligendi deleniti excepturi delectus
          reprehenderit enim aut magni accusamus? Porro, laboriosam rem
          voluptate dicta ab dolores. Quod laudantium harum ad perspiciatis
          impedit eveniet sunt. In odit voluptatum cumque obcaecati?
        </p>
      <Button variant={'darkEmpty'}/>
      </div>
    </section>
  );
}
