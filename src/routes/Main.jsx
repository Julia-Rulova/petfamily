import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainAnimal from "../components/cards/MainAnimal";

function Main() {
  const cards = [
    {
      id: 0,
      name: "000",
    },
    {
      id: 1,
      name: "111",
    },
    {
      id: 2,
      name: "222",
    },
    {
      id: 3,
      name: "333",
    },
    {
      id: 4,
      name: "444",
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col justify-between">
      <Header />

      <main className="flex-1 flex flex-row ">
        <Sidebar />

        <section className="flex-1 px-5 py-6 flex flex-row gap-14">
          <div className="bg-white rounded-lg shadow-xl h-fit p-8">
            <span>form</span>
          </div>

          <ul className="w-full grid grid-cols-4 gap-4">
            {cards.map((card) => (
              <li key={card.id}>
                <MainAnimal card={card}></MainAnimal>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Main;
