import Image from "next/image";

function ImageContainer({
  mainImage,
  name,
}: {
  mainImage: string;
  name: string;
}) {
  return (
    <section className="h-[300px] md:h-[550px] relative mt-2">
      <Image
        src={mainImage}
        fill
        sizes="100vw"
        alt={name}
        className="object-cover rounded-md"
        priority
        blurDataURL={mainImage}
        placeholder="blur"
      />
    </section>
  );
}
export default ImageContainer;
