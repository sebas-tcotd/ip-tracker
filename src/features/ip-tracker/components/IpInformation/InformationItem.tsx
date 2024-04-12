import { camelCaseToWords } from "./utils";

interface InformationItemProps {
  item: string;
  title: string;
}

export const InformationItem = ({ item, title }: InformationItemProps) => (
  <section className="flex flex-col items-center">
    <h2 className="uppercase text-[#8f8f8f] font-bold text-xs tracking-widest">
      {camelCaseToWords(title)}
    </h2>
    <p className="font-medium text-lg">{item || "texto de prueba"}</p>
  </section>
);
