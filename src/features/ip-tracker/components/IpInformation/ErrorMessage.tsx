export const ErrorMessage = () => {
  return (
    <section className="text-center">
      <h3 className="text-red-500 text-xl font-medium mb-2">
        Invalid domain name
      </h3>
      <p>
        While it sounds like a website you'd love to visit, domain names need a
        certain structure. A domain name typically follows the format{" "}
        <span className="bg-violet-50 px-2 py-1 text-violet-950 border border-violet-100 rounded">
          <code>[website name].[com][net][org], etc.</code>
        </span>
        , separated by dots.
      </p>
      <p className="mt-2 text-xs text-[#707070]">
        <small>
          If the domain is correct and you are still viewing this message,
          probably the site you search for doesn't exist.
        </small>
      </p>
    </section>
  );
};
