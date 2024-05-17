import {
  Input,
  Select,
  FormControl,
  FormLabel,
  FormHelperText,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

function FilterAnimalsForm() {
  return (
    <form className=" flex flex-col gap-3">
      <FormControl>
        <FormLabel>Вид</FormLabel>

        <Select focusBorderColor="red.200">
          <option value="cat">Кошка</option>
          <option value="dog">Собака</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Имя</FormLabel>
        <Input focusBorderColor="red.200" />
      </FormControl>

      <FormControl>
        <FormLabel>Возраст</FormLabel>

        <div className="flex flex-row gap-3">
          <NumberInput min={1} max={30}>
            <NumberInputField placeholder="От" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <NumberInput min={1} max={30}>
            <NumberInputField placeholder="До" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </div>

        <FormHelperText>округляется до годов</FormHelperText>
      </FormControl>
    </form>
  );
}

export default FilterAnimalsForm;
