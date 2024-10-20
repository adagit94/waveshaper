import type { AxesValues } from "plot/src/components/ChartCommonTypes";
import { getInterpolatedValue } from "curve";

type CurvesValuesOperation = "min" | "max" | "avg" | "sum" | ((values: number[]) => number);

type CombineCurvesParams = {
  dataSets: AxesValues[];
  operation: CurvesValuesOperation;
  controlSetIndex?: number
};

export const combineCurves = ({ dataSets, operation, controlSetIndex }: CombineCurvesParams) => {
  let values: number[] = [];

  for (const dataSet of controlSetIndex !== undefined ? [dataSets[controlSetIndex]] : dataSets) {
    for (const [x] of dataSet) {
      if (!values.includes(x)) {
        values.push(x);
      }
    }
  }

  values = values.sort();
  let newValues: number[] = [];

  for (const x of values) {
    const interpolatedValues = dataSets.map((set) => getInterpolatedValue("x", x, set)).filter((v) => v !== undefined);

    newValues.push(mergeValues(interpolatedValues, operation));
  }

  return newValues
};

const mergeValues = (values: number[], operation: CurvesValuesOperation): number => {
  switch (operation) {
    case "min":
        return Math.min(...values)

    case "max":
        return Math.max(...values)

    case "avg":
        return values.reduce((acc, val) => acc + val) / values.length

    case "sum":
        return values.reduce((acc, val) => acc + val)

    default:
      return operation(values);
  }
};
