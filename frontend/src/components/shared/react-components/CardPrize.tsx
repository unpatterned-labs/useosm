type ItemType = {
  price: number;
  title: string;
  description: string;
};

const CardPrize = ({
  items,
  totalPrizeText,
}: {
  items: ItemType[];
  totalPrizeText: string;
}) => {
  return (
    <div className="mt-14 mb-6 flex w-full flex-col space-y-4">
      <h3 className="flex items-center justify-center text-lg font-semibold">
        {totalPrizeText}{" "}
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="col-span-1 flex h-[15.8rem] flex-col rounded-3xl border border-gray-300 p-2 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex flex-col items-start justify-start p-2">
              <span className="text-grey-300 text-lg font-semibold">
                {item.price}
              </span>
              <p className="text-grey-300 text-sm">{item.title}</p>
            </div>

            <div className="bg-surface-30 flex-auto rounded-3xl bg-[url('../assets/background/resource-card-vector.svg')] px-4 py-6">
              <p className="text-grey-300 w-3xs text-start text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPrize;
