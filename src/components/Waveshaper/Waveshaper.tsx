import { PointChart, type PointChartProps } from "plot"
import React from "react"

type WaveshaperProps = PointChartProps & {
}

export default function Waveshaper({ ...pointChartProps }: WaveshaperProps) {
    return <div><PointChart {...pointChartProps} /><div></div></div>
}
