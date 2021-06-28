import { Experiment, Variant } from "@tstmkrs/nextjs-ab-test";
import Page1 from "./Page1";
import Page2 from "./Page2";
 
import { useExperiment } from "@tstmkrs/nextjs-ab-test";

const TestExperiment = () => {
	const { Variant } = useExperiment({
		name: "Experiment-test",
		variants: {
			A: <div><Page1 /></div>,
			B: <div><Page2 /></div>
		}
	});

	return (
		<div>
			<Variant />
		</div>
	)
}