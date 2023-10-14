export default function MenuItem({ title, price, img, desc }) {
  return (
    <article>
      <div>
        <img src={img} width={"100px"} />
      </div>
      <div>
        <p>{title}</p>
        <span>${price}</span>
      </div>
      <p>{desc}</p>
    </article>
  );
}
