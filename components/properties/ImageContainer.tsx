import Image from "next/image";

function ImageContainer({
  mainImage,
  name,
}: {
  mainImage: string;
  name: string;
}) {
  const base64 = "data:image/jpeg;base64,";
  const blurImg =
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UQ8AAhUBSQV8WJQAAAAASUVORK5CYII=";

  return (
    <section className="h-[300px] md:h-[550px] relative mt-2">
      <Image
        src={mainImage}
        fill
        sizes="100vw"
        alt={name}
        className="object-cover rounded-md"
        priority
        blurDataURL={base64 + blurImg}
        placeholder="blur"
        unoptimized
      />
    </section>
  );
}
export default ImageContainer;
