import { Experiment, Variant } from "@tstmkrs/nextjs-ab-test";
import Page1 from "./Page1";
import Page2 from "./Page2";
 
export default function Home(){
  return (
    <Experiment name="My Example">
    <Variant name="A">
      <Page1 />
    </Variant>
    <Variant name="B">
      <Page2 />
    </Variant>
  </Experiment>
  )
}