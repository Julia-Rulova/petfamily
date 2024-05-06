import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  List,
  ListItem,
  Button,
} from "@chakra-ui/react";

import { Icon } from "@iconify/react";

function MainAnimal({ card }) {
  const calculateAge = (date) => {
    let today = new Date();
    let birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();

    return age;
  };

  const getNoun = (number, one, two, five) => {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
  };

  return (
    <Card>
      <CardBody>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg"
          alt="Cat"
          borderRadius="lg"
        />

        <Stack mt="6" spacing="3">
          <Heading size="md">
            <span>{card.name}, </span>
            <span className="font-normal">
              {calculateAge(card.date)}{" "}
              {getNoun(calculateAge(card.date), "год", "года", "лет")}
            </span>
          </Heading>

          <List className="text-sm">
            <ListItem className="flex flex-row gap-2">
              <Icon icon="ph:gender-intersex" width="20" height="20" />
              <span>
                <span className="underline decoration-primary font-semibold">
                  Пол:
                </span>{" "}
                {card.sex === "male" ? "М" : "Ж"}
              </span>
            </ListItem>

            <ListItem className="flex flex-row gap-2">
              <Icon icon="solar:people-nearby-outline" width="20" height="20" />
              <span>
                <span className="underline decoration-primary font-semibold">
                  Отношение к людям:
                </span>{" "}
                {card.people_rel}
              </span>
            </ListItem>

            <ListItem className="flex flex-row gap-2">
              <Icon
                icon="fluent:animal-dog-16-regular"
                width="20"
                height="20"
              />
              <span>
                <span className="underline decoration-primary font-semibold">
                  Отношение к животным:
                </span>{" "}
                {card.animal_rel}
              </span>
            </ListItem>

            <ListItem className="flex flex-row gap-2">
              <Icon
                icon="healthicons:surgical-sterilization"
                width="20"
                height="20"
              />
              <span className="flex flex-nowrap gap-1">
                <span className="underline decoration-primary font-semibold">
                  Кастрация/стерилизация:
                </span>
                {card.castration ? (
                  <Icon
                    icon="lets-icons:check-round-fill"
                    width="21"
                    height="21"
                    style={{ color: "green" }}
                  ></Icon>
                ) : (
                  <Icon
                    icon="ion:close-circle"
                    width="20"
                    height="20"
                    style={{ color: "red" }}
                  ></Icon>
                )}
              </span>
            </ListItem>

            <ListItem className="flex flex-row gap-2">
              <Icon
                icon="material-symbols-light:syringe-outline"
                width="20"
                height="20"
              />
              <span className="flex flex-nowrap gap-1">
                <span className="underline decoration-primary font-semibold">
                  Вакцинация:{" "}
                </span>
                {card.vaccine ? (
                  <Icon
                    icon="lets-icons:check-round-fill"
                    width="21"
                    height="21"
                    style={{ color: "green" }}
                  ></Icon>
                ) : (
                  <Icon
                    icon="ion:close-circle"
                    width="20"
                    height="20"
                    style={{ color: "red" }}
                  ></Icon>
                )}
              </span>
            </ListItem>
          </List>
        </Stack>
      </CardBody>

      <CardFooter className="gap-2">
        <Button variant="solid" colorScheme="primary" className="flex-1">
          Подробнее
        </Button>
        <Button variant="solid" colorScheme="primary">
          <Icon
            className="cursor-pointer"
            icon="flowbite:star-outline"
            width="20"
            height="20"
            style={{ color: "#fff" }}
          />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default MainAnimal;
