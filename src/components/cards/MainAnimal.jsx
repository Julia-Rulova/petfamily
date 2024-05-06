import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  UnorderedList,
  ListItem,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

import { Icon } from "@iconify/react";

function MainAnimal({ card }) {
  return (
    <Card>
      <CardBody>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg"
          alt="Cat"
          borderRadius="lg"
        />

        <Stack mt="6" spacing="3">
          <Heading size="md">{card.name}</Heading>

          <UnorderedList className="text-sm">
            <ListItem>Отношение к людям: хорошее</ListItem>
            <ListItem>Отношение к животным: боится</ListItem>
            <ListItem>Кастрирован</ListItem>
            <ListItem>Вакцинирован</ListItem>
          </UnorderedList>
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
