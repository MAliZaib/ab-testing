import { Experiment, Variant } from "@tstmkrs/nextjs-ab-test";
import Page1 from "./Page1";
import Page2 from "./Page2";
 
import { useExperiment } from "@tstmkrs/nextjs-ab-test";

export default function TestExperiment () {
	const { Variant } = useExperiment({
		name: "Experiment-test",
		variants: {
			A: <Page1 />,
			B: <Page2 />
		}
	});

	return (
		<div>
			<Variant />
		</div>
	)
}