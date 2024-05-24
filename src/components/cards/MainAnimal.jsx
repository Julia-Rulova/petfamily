import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Button,
} from "@chakra-ui/react";

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
    <Card variant="unstyled" className="!bg-transparent">
      <CardBody>
        <div class="w-60 h-60 overflow-hidden bg-cover bg-no-repeat">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg"
            alt="Cat"
            className="w-60 max-w-60 h-60 object-cover"
            onMouseOver={(e) =>
              (e.currentTarget.src =
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Felis_catus-cat_on_snow.jpg/269px-Felis_catus-cat_on_snow.jpg")
            }
            onMouseOut={(e) =>
              (e.currentTarget.src =
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg")
            }
          />
        </div>

        <Stack className="my-4" spacing="2">
          <Heading size="md">{card.name}</Heading>

          <span>
            {card.sex === "male" ? "Мальчик" : "Девочка"},{" "}
            {calculateAge(card.date)}{" "}
            {getNoun(calculateAge(card.date), "год", "года", "лет")}
          </span>
        </Stack>
      </CardBody>

      <CardFooter className="gap-2">
        <Button variant="solid" colorScheme="primary">
          Подробнее
        </Button>
      </CardFooter>
    </Card>
  );
}

export default MainAnimal;
