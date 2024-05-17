import FilterAnimalsForm from "../components/FilterAnimalsForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainAnimal from "../components/cards/MainAnimal";

function Main() {
  const cards = [
    {
      id: 0,
      name: "cat 1",
      date: "06.05.2023",
      sex: "male",
      vaccine: true,
      castration: true,
      animal_rel: "ну так",
      people_rel: "нормалдаки",
    },
    {
      id: 1,
      name: "cat 2",
      date: "06.05.2022",
      sex: "female",
      vaccine: false,
      castration: false,
      animal_rel: "ну так",
      people_rel: "нормалдаки",
    },
    {
      id: 2,
      name: "cat 3",
      date: "06.05.2021",
      sex: "male",
      vaccine: true,
      castration: true,
      animal_rel: "ну так",
      people_rel: "нормалдаки",
    },
    {
      id: 3,
      name: "cat 4",
      date: "06.05.2020",
      sex: "male",
      vaccine: true,
      castration: false,
      animal_rel: "ну так",
      people_rel: "нормалдаки",
    },
    {
      id: 4,
      name: "cat 5",
      date: "06.05.2019",
      sex: "female",
      vaccine: false,
      castration: true,
      animal_rel: "ну так",
      people_rel: "нормалдаки",
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col justify-between">
      <Header />

      <main className="flex-1 flex flex-row ">
        <Sidebar />

        <section className="flex-1 px-5 py-6 flex flex-row gap-14">
          <FilterAnimalsForm />

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
