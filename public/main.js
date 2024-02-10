const gridEl = document.getElementById("grid-el");

const statisticsData = [
  {
    title: "Price calculator",
    description:
      "How much does 1 Eur in 1963 equal in today's prices? Adjust the rent?",
    button: "Calculate price changes",
    backgroundColor: "bg-[#E5E7F6]",
    border: "border border-[#DCDFF4]",
  },
  {
    title: "Name statistics",
    description:
      "How much does 1 Eur in 1963 equal in today's prices? Adjust the rent?",
    button: "Search by name",
    backgroundColor: "bg-[#FAE6E6]",
    border: "border border-[#F4DEF1]",
  },
  {
    title: "Stats table",
    description: "Find detailed tables with time and create your own",
    button: "Go to tables",
    backgroundColor: "bg-[#F6E5F5]",
    border: "border border-[#F4DEF1]",
  },
  {
    title: "Calendar",
    description: "See the advance release of calendars in 2021",
    button: "Go to calendar",
    border: "underline text-[#2431E1]",
  },
  {
    title: "Subscrie to news",
    description:
      "Get the latest statistics releases and publications by e-mail",
    button: "Receive e-mail alerts",
    border: "underline text-[#2431E1]",
  },
  {
    title: "Api",
    description:
      "Easilly retrive and integrate statistics with your own system",
    button: "Open API",
    border: "underline text-[#2431E1]",
  },
];

const generateStatistics = () => {
  return (gridEl.innerHTML = statisticsData
    .map((x) => {
      let { title, description, button, backgroundColor, border } = x;

      return `
        <div class="${backgroundColor} px-4 py-8 space-y-4 font-semibold rounded-lg hover:shadow-lg cursor-pointer">
          <h3 class="text-lg">${title}</h3>
          <p class="text-sm">
            ${description}
          </p>
          <button
            class="${border} text-sm px-2 py-1 rounded-full hover:bg-white"
          >
            <a href="#" class="">${button}</a>
          </button>
        </div>
        `;
    })
    .join(""));
};
generateStatistics();
