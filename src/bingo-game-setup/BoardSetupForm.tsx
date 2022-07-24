import { Form, Field } from "formik";
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";

export const BoardSetupForm = () => {
  return (
    <Form>
      <BoardNameInput></BoardNameInput>
      <TileListInput></TileListInput>
    </Form>
  );
};

const BoardNameInput = () => (
  <Field
    name="boardName"
    validate={(value: any) => {
      if (!value) return "Name is required";
    }}
  >
    {({ field, form }: any) => {
      return (
        <FormControl
          id="board-name"
          isRequired
          isInvalid={form.touched.boardName && Boolean(form.errors.boardName)}
          variant="floating"
        >
          <Input {...field} type="text" placeholder=" "></Input>
          <FormLabel>Name</FormLabel>
          <FormErrorMessage mb={4}>{form.errors.boardName}</FormErrorMessage>
          <div></div>
        </FormControl>
      );
    }}
  </Field>
);
const TileListInput = () => (
  <Field
    name="tiles"
    validate={(value: any) => {
      if (!value) return "Tile list is required";
      const board = value.split(",").map((tile: string) => tile.trim());
      if (board.length !== 25) {
        return `Board is only ${board.length}, should be 25`;
      }
    }}
  >
    {({ field, form }: any) => {
      return (
        <FormControl
          id="tiles-input"
          isInvalid={form.touched.tiles && Boolean(form.errors.tiles)}
          variant="floating"
        >
          <Input {...field} placeholder=" " type="text" />
          <FormLabel>Tiles</FormLabel>
          <FormHelperText>
            Input a comma-separated list for Bingo tiles
          </FormHelperText>
          <FormErrorMessage mb={4}>{form.errors.tiles}</FormErrorMessage>
        </FormControl>
      );
    }}
  </Field>
);
