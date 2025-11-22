const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-center">
      <h2 className="text-3xl md:text-3xl xl:text-4xl font-bold">{title}</h2>
    </div>
  );
};

export default SectionTitle;
