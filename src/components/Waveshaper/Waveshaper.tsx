import type { PointChartProps } from "plot"
import type { TFramerValues } from "plot/src/framer"

type VariableSettings = {
    valueHandler: (params: {frame: TFramerValues})
}

type WaveshaperProps = PointChartProps & {
    variables: Record<string, >
}

export default function Waveshaper({}: WaveshaperProps) {
    return null
}
