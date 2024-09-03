import { TransitionType, useTransition } from "@/lib/TransitionContext";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function SelectTransition() {
  const { transitionType, setTransitionType } = useTransition();
  return (
    <div className="mt-6">
      <label
        htmlFor="transition-mode"
        className="block text-sm font-medium mb-2"
      >
        Transition Mode
      </label>
      <Select
        defaultValue={transitionType}
        onValueChange={(value) => setTransitionType(value as TransitionType)}
      >
        <SelectTrigger id="transition-mode">
          <SelectValue placeholder="Select transition" />
        </SelectTrigger>
        <SelectContent className="bg-gray-800 text-white">
          <SelectItem value="none">None</SelectItem>
          <SelectItem value="fade">Fade</SelectItem>
          <SelectItem value="slide">Slide</SelectItem>
          <SelectItem value="zoom">Zoom</SelectItem>
          <SelectItem value="blend">Blend</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
