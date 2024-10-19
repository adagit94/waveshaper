import type { AxesValues } from "plot/src/components/ChartCommonTypes";
import { getInterpolatedValue } from "curve";

type CurvesValuesOperation = "min" | "max" | "avg" | "sum" | ((values: number[]) => number);

type CombineCurvesParams = {
  dataSets: AxesValues[];
  operation: CurvesValuesOperation;
};

export const combineCurves = ({ dataSets, operation }: CombineCurvesParams) => {
  let values: number[] = [];

  for (const dataSet of dataSets) {
    for (const [x] of dataSet) {
      if (!values.includes(x)) {
        values.push(x);
      }
    }
  }

  values = values.sort();

  for (const x of values) {
    const interpolatedValues = dataSets.map((set) => getInterpolatedValue("x", x, set));
  }
};

const mergeValues = (values: number[], operation: CurvesValuesOperation) => {
  switch (operation) {
    case "min":
      break;

    case "max":
      break;

    case "avg":
      break;

    case "sum":
      break;

    default:
      operation?.(values);
  }
};
