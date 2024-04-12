import { camelCaseToWords } from "./utils";

interface InformationItemProps {
  item: string;
  title: string;
}

export const InformationItem = ({ item, title }: InformationItemProps) => (
  <section className="flex flex-1 | flex-col items-center md:items-start | md:border-r md:last:border-none ">
    <h2 className="uppercase text-[#8f8f8f] font-bold text-xs tracking-widest">
      {camelCaseToWords(title)}
    </h2>
    {item ? (
      <p className="font-medium text-lg md:text-2xl | text-center md:text-start">{item}</p>
    ) : (
      <p className="text-[#202020]">-</p>
    )}
  </section>
);
