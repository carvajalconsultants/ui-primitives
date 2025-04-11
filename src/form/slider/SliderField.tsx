import { Slider, SliderOutput, SliderThumb, SliderTrack } from "react-aria-components";

import { cx } from "../../../styled-system/css";
import { slider } from "../../../styled-system/recipes";
import { Label } from "../../common/Label";

import type { FC } from "react";
import type { SliderProps as AriaSliderProps } from "react-aria-components";

import type { SliderVariantProps } from "../../../styled-system/recipes";
import type { WithoutClassName } from "../../types";

export interface SliderFieldProps extends WithoutClassName<AriaSliderProps>, SliderVariantProps {
  /**
   * Label shown above the slider field.
   */
  label?: string;

  /**
   * Array of strings that represent the labels of the thumbs.
   */
  thumbLabels?: string[];

  /**
   * The minimum value of the slider.
   */
  minValue?: number;

  /**
   * The maximum value of the slider.
   */
  maxValue?: number;

  /**
   * The value of the slider.
   */
  value?: number | number[];

  /**
   * If no value is given, this number will be the initial value of the slider.
   */
  defaultValue?: number | number[];

  /**
   * The step value of the slider.
   */
  step?: number;

  /**
   * Boolean value that determines if the slider can be dragged or not.
   */
  isDisabled?: boolean;
}

/**
 * ARIA Slider component with a label and thumbs that can be dragged to change the value of the slider.
 */
export const SliderField: FC<SliderFieldProps> = ({ label, thumbLabels, ...props }) => {
  const classes = slider();

  return (
    <Slider className={cx("group", classes.field)} {...props}>
      <div className="flex">
        <Label>{label}</Label>
        <SliderOutput className={classes.output}>{({ state }) => state.values.map((_, i) => state.getThumbValueLabel(i)).join(" – ")}</SliderOutput>
      </div>

      <SliderTrack className={classes.track}>
        {({ state }) => (
          <>
            {/* Slider's Track */}
            <div className={classes.trackBase}></div>

            {/* Fill (showing how much the slider field is dragged) */}
            <div className={classes.fill} style={{ width: state.getThumbPercent(0) * 100 + "%" }}></div>

            {state.values.map((_, i) => (
              <SliderThumb className={classes.thumb} key={i} index={i} aria-label={thumbLabels?.[i]} />
            ))}
          </>
        )}
      </SliderTrack>
    </Slider>
  );
};
